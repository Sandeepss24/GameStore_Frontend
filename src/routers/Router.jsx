import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleGame from "../components/SingleGame";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadGames from "../dashboard/UploadGames";
import ManageGames from "../dashboard/ManageGames";
import EditGames from "../dashboard/EditGames";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
import Payment from "../shop/Payment";
import Users from "../dashboard/Users";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup/>
    },
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "/home",
          element:<Home/>
        },
        {
          path: "/shop",
          element: <Shop/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/game/:id",
          element: <SingleGame/>,
          loader: ({params}) => fetch(`http://localhost:7000/game/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadGames/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageGames/>
        },
        {
          path: "/admin/dashboard/edit-games/:id",
          element: <EditGames/>,
          loader:({params})  => fetch(`http://localhost:7000/game/${params.id}`)
        },
        {
          path: "/admin/dashboard/users",
          element: <Users/>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "/payment",
      element: <Payment/>
    }
  ]);
  export default router;