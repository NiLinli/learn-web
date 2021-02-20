import React from 'react';
import BlogPost from './BlogPost';
import CommentList from './CommentList';

export default function HocWrapper() {
  return (
    <div>
      <BlogPost />
      <CommentList />
    </div>
  );
}
