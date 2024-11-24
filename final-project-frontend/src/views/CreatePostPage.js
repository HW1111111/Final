import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useNavigate} from "react-router-dom";

export const CreatePostPage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [user, setUser] = useState({
        email: '',
        id: ''
    })
    useEffect(() => {
        const userStr = localStorage.getItem('token')
        if (!userStr) {
            navigate({pathname: '/auth/signIn'})
        } else {
            console.log('user', userStr)
            const userData = JSON.parse(userStr)
            setUser(userData)
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            title,
            content,
            tags: tags.split(',').map(tag => tag.trim()),
            author: user._id
        };
        if (!post.title || !post.content) {
            alert('Title and content are required');
        }
        try {
            await fetch('/posts', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Post created successfully');
            navigate('/');

        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        }
    };

    return (
        <div className="w-full">
            <main className="mx-auto w-8/12">
                <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="tags">Tags (comma separated)</label>
                        <input
                            type="text"
                            id="tags"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                    <div className="mb-14">
                        <label className="block text-sm font-medium mb-2" htmlFor="content">Content</label>
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            className="bg-white h-64"
                            required

                        />
                    </div>

                    <button type="submit"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Create
                        Post
                    </button>
                </form>
            </main>
        </div>
    );
};
