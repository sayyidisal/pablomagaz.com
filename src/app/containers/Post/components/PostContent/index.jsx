import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';
import hljs from 'highlight.js/lib/highlight';
import ReactHtmlParser from 'html-react-parser';
import javascript from 'highlight.js/lib/languages/javascript';

import { SiteConf, context, getDate } from 'base';
import Loading from 'components/Loading';
import PostInfo from 'components/PostInfo';
import PostComments from '../PostComments';
import styles from './styles.css';

class PostContent extends Component {

  static proopTypes = {
    post: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
  }
  
  componentDidMount() {
    const post = this.props.post;
    this.highlightCode();
  }

   highlightCode() {
    setTimeout(() => {
      hljs.initHighlighting.called = false;
      hljs.registerLanguage('javascript', javascript);
      hljs.initHighlighting();
    }, SiteConf.codeHighlightDelay);
  }

  isLoaded(){
    return !~this.props.post.id ? true : false; 
  }

  render () {
    const post = this.props.post;
    const postLoaded = this.isLoaded(post);
    const content = postLoaded ? <Loading /> : ReactHtmlParser(post.html); 

    const cx = classNames.bind(styles);
    const postContentStyle = cx({
      'postContent': true,
      //'postContentAnim': context.client ? true : false
    });

    const postUrl = `${SiteConf.BlogUrl}${post.slug }`;
    const identifier = `${post.slug}${post.id }`;

    return (
      <div className={ styles.post }>
        <div className={ postContentStyle }>
          <h1>{ post.title }</h1>
          <PostInfo
            author={ post.author }
            tags={ post.tags }
            date={ post.published_at }
           />
           <div className={ styles.postText }> 
            { ReactHtmlParser(post.html) }
            <span className={ styles.divider}></span>
            <PostComments post={ post } />
        </div>
      </div>
    </div>
    );
  };
}

export default PostContent;