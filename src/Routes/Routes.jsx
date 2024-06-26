import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Education from "../Education/Education";
import Sidebar from "../Navbar/Sidebar";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/navbar",
            element:<Sidebar></Sidebar>
        },
        {
            path:"/education",
            element:<Education></Education>
        },
        {
          path:"/projects",
          element:<Projects></Projects>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);

  export default router;