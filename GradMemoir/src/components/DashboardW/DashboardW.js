// src/components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // For navigation
import axios from 'axios';
import PostCard from './PostCard'; // A component for displaying individual posts
import './Dashboard.css';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    // Fetch posts from the API
    useEffect(() => {
        const fetchPosts = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                history.push('/signin');
                return;
            }

            try {
                const response = await axios.get('http://localhost:5001/api/posts', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                history.push('/signin');
            }
        };
        fetchPosts();
    }, [history]);

    // Handle post creation
    const handleCreatePost = async () => {
        if (!newPost.trim()) return; // Don't create if the post is empty

        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/signin');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/posts', { content: newPost }, {
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
            });

            if (response.status === 201) {
                setNewPost('');
                const createdPost = response.data;
                setPosts([createdPost, ...posts]);
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    // Handle post deletion
    const handleDeletePost = async (postId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/signin');
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.status === 200) {
                setPosts(posts.filter(post => post.id !== postId));
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    // Handle post editing (navigate to an edit page)
    const handleEditPost = (postId) => {
        history.push(`/edit-post/${postId}`);
    };

    return (
        <div className="dashboard">
            <h1>Welcome to your Dashboard</h1>

            {/* Post creation form */}
            <div className="create-post">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write a new post..."
                />
                <button onClick={handleCreatePost}>Create Post</button>
            </div>

            {/* Post list */}
            <div className="post-list">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    posts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onEdit={handleEditPost}
                            onDelete={handleDeletePost}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
