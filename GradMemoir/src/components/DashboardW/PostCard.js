// src/components/Dashboard/PostCard.js
import React from 'react';
import './PostCard.css';

const PostCard = ({ post, onEdit, onDelete }) => {
    return (
        <div className="post-card">
            <p>{post.content}</p>
            <div className="post-actions">
                <button onClick={() => onEdit(post.id)}>Edit</button>
                <button onClick={() => onDelete(post.id)}>Delete</button>
            </div>
        </div>
    );
};

export default PostCard;
