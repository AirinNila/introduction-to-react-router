import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/home.jsx';
import About from './component/about/about.jsx';
import Contact from './component/contact/contact.jsx';
import Users from './component/users/users.jsx';
import UserDtails from './component/userDetails/userDtails.jsx';
import Posts from './component/posts/posts.jsx';
import PostDetails from './component/postDetails/postDetails.jsx';
import ErrorPage from './component/errorPage/errorPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDtails></UserDtails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: 'posts/:idOfUser',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.idOfUser}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
   
  </StrictMode>,
)
