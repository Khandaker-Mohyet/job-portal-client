
import {
  createBrowserRouter,
} from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AplayJob from "../Pages/AplayJob";
import MyApplication from "../Pages/MyApplication";
import AddJobs from "../Pages/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: "Page not found",
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: "/aplayJob/:id",
        element: <PrivateRoute><AplayJob></AplayJob></PrivateRoute>,
      },
      {
        path: "/myApplication",
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
      },
      {
        path: "/addJobs",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path: "/myPostedJobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: "/viewApplication/:job_id",
        element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },
      
    ]
  },
])

export default router;