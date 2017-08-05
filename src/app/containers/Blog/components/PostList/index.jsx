import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { pure, onlyUpdateForKeys, onlyUpdateForPropTypes } from 'recompose'

import { SiteConf } from 'base';
import Loading from 'components/Loading';
import PostSummary from '../PostSummary';

const isLoaded = (posts) => {
    return posts.size ? true : false;
  }

const propTypes= {
  posts: PropTypes.object.isRequired
}

const PostList = ({ posts }) => {

    const postsLoaded = isLoaded(posts); 
    const Posts = posts.map(post => {
         return (<PostSummary
        post={ post }
        key={ post.id }
      />
      )}
    );
    
    const content = !postsLoaded ? <Loading /> : Posts; 
    
    return (
    <div> { content } </div>
    );
 
 };

PostList.propTypes = propTypes;

//export default PostList;
export default pure(PostList);
