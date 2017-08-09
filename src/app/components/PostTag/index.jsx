import React  from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

const propTypes= {
  tags: PropTypes.array.isRequired,
};

const PostTag = ({ tags }) => {

  const tagList = tags.map(tag => {
    return (
      <mark key={ tag.id }> { tag.name } </mark>
    );
  });

  return (
    <div className={ styles.postTag }>
      { tagList }
    </div>
  );
};

PostTag.propTypes = propTypes;

export default PostTag;
