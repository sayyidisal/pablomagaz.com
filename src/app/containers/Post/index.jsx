import Immutable from 'immutable';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import { fetchRequiredActions, SiteConf } from 'base';
import styles from './styles.css';
import codeStyle from '../../styles/code.css';
import * as Actions from './actions';
import PostHeader from './components/PostHeader';
import PostContent from './components/PostContent';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  Post: PropTypes.instanceOf(Immutable.Record).isRequired
};

export class Post extends Component {

  static requiredActions = [Actions.getPost];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount() {
    const post = this.props.Post; 
    const force = (post.id !== -1) ? false : true;
    fetchRequiredActions(Post.requiredActions, this.props, 'Post', force);
  }

  componentWillUnmount() {
    this.actions.cleanPost();
  }
  
  render () {
    const post = this.props.Post;
    const postImage = `${SiteConf.ImageUrl}${post.image}`;
    
    return (
      <div className={ styles.mainContent  }>
        <div className={ styles.post  }>
          <PostHeader
            image={ postImage }
            title={ post.title }
          />
          <PostContent post={ post } />
        </div>
      </div>
    );
  }
}

Post.propTypes = propTypes;

export default connect(
  (state) => ({ Post: state.Post })
)(Post);
