import React from 'react';

import { useSelector } from 'react-redux';

import Comment from './Comment';

export default function Comments({ postId }) {
  const comments = useSelector((state) => state.posts)[postId].Comments.map(
    (commentId) => {
      return <Comment commentId={commentId} key={commentId}/>;
    }
  );
  return <div className="comment">{comments}</div>;
}
