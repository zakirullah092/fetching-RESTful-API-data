import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/posts') // Use the actual API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog</h2>
      <ul className="blog-list">
        {posts.map(post => (
          <li key={post.id} className="blog-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">{tag}</span>
              ))}
            </div>
            <div className="post-reactions">
              <span>Likes: {post.reactions.likes}</span>
              <span>Dislikes: {post.reactions.dislikes}</span>
            </div>
            <div className="post-views">
              <span>Views: {post.views}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
