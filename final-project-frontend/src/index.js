import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, Navigate, RouterProvider} from 'react-router-dom'
import {SignInForm} from "./components/SignInForm";
import {SignUpForm} from "./components/SignUpForm";
import {PublicLayout} from './layout/PublicLayout'
import {HomePage} from "./views/HomePage";
import {CreatePostPage} from "./views/CreatePostPage";
import {PostPage} from "./views/PostPage";
import ProfilePage from "./views/Profile";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const routes = [
    {
        path: '/',
        element: <PublicLayout/>,
        children: [
            {
                path: '',
                element: <HomePage/>,
            },
            {
                path: 'profile/:id',
                element: <ProfilePage/>,
            },
            {
                path: 'post/:id',
                element: <PostPage/>
            },
            {
                path: 'createPost',
                element: <CreatePostPage/>
            }
        ],
    },
    {
        path: '/auth',
        children: [
            {
                path: 'signIn',
                element: <SignInForm/>,
            },
            {
                path: 'signUp',
                element: <SignUpForm/>,
            }
        ],
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
]
const router = createHashRouter(routes)

root.render(
    <RouterProvider router={router}/>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
