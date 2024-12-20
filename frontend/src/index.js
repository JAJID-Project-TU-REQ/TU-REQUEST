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
import ProfessorDashboard from "./pages/ProfessorDashboard";
import ProtectedLayout from "./ProtectedLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Detail from "./pages/Detail";
import StudentFormDetail from "./pages/StudentFormDetail";


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
             path: "/main/student-dashboard",
            element: <BasicTabs />
          },
          {
            path: "/main/professor-dashboard",
            element: <ProfessorDashboard />
          },
          {
            path: "/main/professor-dashboard/form-detail/:form_id",
            element: <Detail />
          },
          {
            path: "/main/student-dashboard/form-detail/:form_id",
            element: <Detail />
          },
          {
            path: "/main/normal-request",
            element: <Normal_Request />
          },
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