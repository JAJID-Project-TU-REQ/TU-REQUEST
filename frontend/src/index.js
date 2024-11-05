import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Normal_Request from "./pages/Normal_Request";
import BasicTabs from "./components/status";
import ProtectedLayout from "./ProtectedLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";


const router = createBrowserRouter([
 
  {
    path: "/",
    element:<Login />,
  },
  {
    element: <ProtectedLayout/>,
    children: [
      {
        path: "/main",
        element: <App />,
        children: [
          {
             path: "/main/status",
            element: <BasicTabs />,
          },
          {
            path: "/main/normal-request",
            element: <Normal_Request />
          }
      ]
    },
    ],
  },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);