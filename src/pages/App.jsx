import React from "react";
import { Navigate, createBrowserRouter, RouterProvider} from "react-router-dom";
import { LoginPage } from "./login/Login";
import { HomePage } from "./home/HomePage";
import { Auth } from "../auth/Auth";
import { Provider } from "../provider/provider";
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Projects } from "./projects/Projects";
import { Users } from "./users/Users";


const router = createBrowserRouter([
  {
    path: "login",
    element: <Auth component={<LoginPage />} />,
  },
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "dashboard",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Auth component={<Dashboard />} />
          </React.Suspense>
        ),
      },  
      {
        path: "projects",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Auth component={<Projects />} />
          </React.Suspense>
        ),
      },  
      {
        path: "users",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Auth component={<Users />} />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

