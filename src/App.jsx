import React from "react";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTask from "./Components/CreateTask";
import "./index.css";
import Dashboard from "./Components/Dashboard";
import Image from "./Components/Image";
import AllEvents from "./Components/AllEvents";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/all",
          element: <AllEvents />,
        },
        {
          path: "/create",
          element: <CreateTask />,
        },
        {
          path: "/img",
          element: <Image />,
        },
      ],
      errorElement: <div>404 Error</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
