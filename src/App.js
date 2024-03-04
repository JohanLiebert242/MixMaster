import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomeLayout,
    Landing,
    About,
    Cocktail,
    Error,
    Newsletter,
} from "./pages";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "cocktail",
                element: <Cocktail />,
            },
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "newsletter",
                element: <Newsletter />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
