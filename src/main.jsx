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
        loader: ()=>fetch(`http://localhost:5000/review`)
     },
      {
        path: "/addReview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
     },
      {
        path: "/myReview/:email",
        element: <PrivateRoute><MyReviewContainer></MyReviewContainer></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/review/${params.email}`)
     },
      {
        path: "/gameWatchList",
        element: <PrivateRoute><GameWatchListContainer></GameWatchListContainer></PrivateRoute>,
        loader: ()=>fetch("http://localhost:5000/gamelist")
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
        loader: ({params})=>fetch(`http://localhost:5000/default/${params.id}`),
        element: <GameDetail></GameDetail>,
     },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
