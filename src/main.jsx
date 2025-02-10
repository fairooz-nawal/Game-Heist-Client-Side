import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/home/Home.jsx';
import AllReview from './components/Review/AllReview.jsx';
import AddReview from './components/Review/AddReview.jsx';
import MyReview from './components/Review/MyReview.jsx';
import GameWatchList from './components/GameWatchList/GameWatchList.jsx';
import SignIn from './components/SignIn and SignUp/SignIn.jsx';
import SignUp from './components/SignIn and SignUp/SignUp.jsx';
import { AppProvider } from './components/ContextAPI/ContextAPI.jsx'
import GameDetail from './components/home/GameCollection/GameDetail.jsx';
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
        element: <AllReview></AllReview>,
     },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
     },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
     },
      {
        path: "/gameWatchList",
        element: <GameWatchList></GameWatchList>,
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
