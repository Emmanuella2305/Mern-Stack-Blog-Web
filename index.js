import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePost from './pages/CategoryPosts';
import EditPost from './pages/EditPosts';
import DeletePost from './pages/DeletePosts';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboards from './pages/Dashboard';
import Logout from './pages/Logout';
import UserProvider from './context/UserContext';



const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    errorElement: <ErrorPage/>,
    children: [
       {index: true, element: <Home />},
       {path: "posts/:id", element: <PostDetail />},
       {path: 'register', element: <Register />},
       {path: 'login', element: <Login />},
       {path: "profile/:id", element: <UserProfile />},
       {path: 'authors', element: <Authors />},
       {path: 'create', element: <CreatePost />},
       {path: 'posts/:id/edit', element: <EditPost />},
       {path: 'posts/:id/delete', element: <DeletePost />},
       {path: 'posts/categories/:category', element: <CategoryPosts />},
       {path: 'posts/users/:id/', element: <AuthorPosts />},
       {path: 'myposts/:id', element: <Dashboards />},
       {path: 'logout', element: <Logout />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
