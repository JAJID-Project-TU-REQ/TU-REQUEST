import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Sidebar from "./components/jeang";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/login",
    element: <Login />,
    
  },
  {
    path: "/navbar",
    element: <Sidebar />,
    
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);