import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import ErrorPages from "../ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Home/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>, // Use element not Component
    errorElement: <ErrorPages />, // This will catch any error in this route branch
    children: [
      {
        index: true,
       
       element : <Home></Home>
      },

       {
       path : '/project/:projectId',
       
       element : <ProjectDetails></ProjectDetails>
      },
    ]
    }
])