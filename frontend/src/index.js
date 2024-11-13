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
import { Provider } from "react-redux";
import store from "./redux/store";


const router = createBrowserRouter([
 
  {
    path: "/",
    element:<Login />,
  },
  {
    element: <ProtectedLayout/>,
    children: [
      {
        path: "",
        element: <App />,
        children: [
          {
             path: "student-dashboard",
            element: <BasicTabs />,
          },
          {
            path: "professor-dashboard",
            element: <ProfessorDashboard />
          },
          {
            path: "normal-request",
            element: <Normal_Request />
          },
        {
          path: "detail",
          element: <Detail />
        }

      ]
    },
    ],
  },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
  