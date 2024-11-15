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
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Detail from "./pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import StudentFormDetail from "./pages/StudentFormDetail";
import { useSelector } from "react-redux";
import ProtectedStudentLayout from "./method/protectedLayout/ProtectedStudentLayout";
import ProtectedprofessorLayout from "./method/protectedLayout/ProtectedprofessorLayout";


const IsLogin = () => {
  const token = localStorage.getItem('token');
  const isLogin = useSelector((state) => state.login.value);
  console.log('jeang: ' + isLogin);
  return isLogin || token? <BasicTabs />: <Login />;
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
          path: "/",
        element: <IsLogin/>,
      },
      {
        element: <ProtectedStudentLayout />,
        children:
        [
          {
            path: "normal-request",
            element: <Normal_Request />
          },
          {
            path: "Detail/:form_id",
            element: < Detail/>
          }
        ]
      },
      {
        element: <ProtectedprofessorLayout />,
        children:
        [
          {
            path: "/",
            element: <ProfessorDashboard />
          },
          {
            path: "student-form-detail/:form_id",
            element: <StudentFormDetail />,
          },
        ]
      },
    ]
  },
]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
  