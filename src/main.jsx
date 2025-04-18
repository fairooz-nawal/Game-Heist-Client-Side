import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/home/Home.jsx';
import AddReview from './components/Review/AddReview.jsx';
import MyReviewContainer from './components/Review/MyReviewContainer.jsx';
import GameWatchListContainer from './components/GameWatchList/GameWatchListContainer.jsx';
import SignIn from './components/SignIn and SignUp/SignIn.jsx';
import SignUp from './components/SignIn and SignUp/SignUp.jsx';
import { AppProvider } from './components/ContextAPI/ContextAPI.jsx'
import GameDetail from './components/home/GameCollection/GameDetail.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AllReviewContainer from './components/Review/AllReviewContainer.jsx';
import EditReview from './components/Review/EditReview.jsx';
import Error from './components/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
     },
      {
        path: "/allReview",
        element: <AllReviewContainer></AllReviewContainer>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/review`)
     },
      {
        path: "/addReview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
     },
      {
        path: "/myReview/:email",
        element: <PrivateRoute><MyReviewContainer></MyReviewContainer></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/review/${params.email}`)
     },
      {
        path: "/editmyreview/:email/:id",
        element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/review/${params.email}/${params.id}`)
     },
      {
        path: "/gameWatchList/:email",
        element: <PrivateRoute><GameWatchListContainer></GameWatchListContainer></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/gamelist/${params.email}`)
     },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
     },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
     },
      {
        path: "/details/:id",
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/default/${params.id}`),
        element: <GameDetail></GameDetail>,
     },
    ]
  },
    {
      path: "*",
      element: <Error></Error>,
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
