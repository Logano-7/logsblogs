// Importing React since we are using React.
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Log from "./pages/Log";
import SinglePost from "./pages/SinglePost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <SinglePost /> },
      { path: "/log", element: <Log /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
