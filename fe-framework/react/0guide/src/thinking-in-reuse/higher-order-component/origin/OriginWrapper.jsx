import React from 'react';
import BlogPost from './BlogPost';
import CommentList from './CommentList';

export default function OriginWrapper() {
  return (
    <div>
      <BlogPost />
      <CommentList />
    </div>
  );
}
