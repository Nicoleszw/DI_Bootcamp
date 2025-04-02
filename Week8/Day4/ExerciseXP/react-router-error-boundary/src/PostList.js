import React from 'react';
import posts from './posts.json';

const PostList = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hi This is a Title</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: '2rem 0' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
