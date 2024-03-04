import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomeLayout, Landing, About, Cocktail, Error, Home, Newsletter } from "./pages";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
