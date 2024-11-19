// src/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001';

export const getPosts = async () => {
    const response = await fetch(`${API_BASE_URL}/api/posts`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
};

export const createPost = async (postContent) => {
    const response = await fetch(`${API_BASE_URL}/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: postContent }),
    });
    if (!response.ok) {
        throw new Error('Failed to create post');
    }
    return response.json();
};

export const deletePost = async (postId) => {
    const response = await fetch(`${API_BASE_URL}/api/posts/${postId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete post');
    }
    return response.json();
};

export const signUp = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to sign up');
    }
    return response.json();
};

export const signIn = async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/api/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        throw new Error('Failed to sign in');
    }
    return response.json();
};
