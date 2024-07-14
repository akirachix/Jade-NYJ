import React from 'react';
import './index.css';

const BlogPost = ({ post, onNext, onBack }) => {


  return (
    <div className="blog-post">
      <div className="post-image">
        {post.image && <img src={post.image} alt={post.title} />}
      </div>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div className="navigation">
          {onBack && <button onClick={onBack}>Back</button>}
          {onNext && <button onClick={onNext}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
