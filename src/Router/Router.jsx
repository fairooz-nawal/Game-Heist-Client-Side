import {
    createBrowserRouter,
} from "react-router-dom";


import AddReview from '../../src/components/Review/AddReview.jsx';
import MyReviewContainer from '../../src/components/Review/MyReviewContainer.jsx';
import GameWatchListContainer from '../../src/components/GameWatchList/GameWatchListContainer.jsx';
import SignIn from '../../src/components/SignIn and SignUp/SignIn.jsx';
import SignUp from '../../src/components/SignIn and SignUp/SignUp.jsx';
import GameDetail from '../components/GameCollection/GameDetail.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import AllReviewContainer from '../../src/components/Review/AllReviewContainer.jsx';
import EditReview from '../../src/components/Review/EditReview.jsx';
import Error from '../../src/components/Error.jsx';
import Home from '../Pages/Home.jsx';
import App from "../App.jsx";
import HomeLayout from "../Layout/HomeLayout.jsx";
import AuthLayout from "../Layout/AuthLayout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allReview",
                element: <AllReviewContainer></AllReviewContainer>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/review`)
            },
            {
                path: "/addReview",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
            },
            {
                path: "/myReview/:email",
                element: <PrivateRoute><MyReviewContainer></MyReviewContainer></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/review/${params.email}`)
            },
            {
                path: "/editmyreview/:email/:id",
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/review/${params.email}/${params.id}`)
            },
            {
                path: "/gameWatchList/:email",
                element: <PrivateRoute><GameWatchListContainer></GameWatchListContainer></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/gamelist/${params.email}`)
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/default/${params.id}`),
                element: <GameDetail></GameDetail>,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <SignIn></SignIn>,
            },
            {
                  path: "/auth/registration",
                element: <SignUp></SignUp>,
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    },
]);

