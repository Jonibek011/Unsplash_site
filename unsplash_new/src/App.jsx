import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";
//pages
import { Home, About, Contact, ImageInfo, Login, Register } from "./pages";
import LikedImages from "./pages/LikedImages";
import DownloadedImages from "./pages/DownloadedImages";

import { ProtectedRoute } from "./components";

//global context
import { useGlobalContext } from "./hooks/useGlobalContext";

//actions
import { action as HomeAction } from "./pages/Home";
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useEffect } from "react";
import { toast } from "react-toastify";
function App() {
  const { user, dispatch, readyChange } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute user={user}>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedImages",
          element: <LikedImages />,
        },
        {
          path: "downloadedImages",
          element: <DownloadedImages />,
        },
        {
          path: "/imageInfo",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "READYCHANGE" });
    });
  }, []);

  return <div>{readyChange && <RouterProvider router={routes} />}</div>;
}

export default App;
