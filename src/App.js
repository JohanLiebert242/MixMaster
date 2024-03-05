import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomeLayout,
    Landing,
    About,
    Cocktail,
    Error,
    Newsletter,
    SinglePageError,
} from "./pages";
import "./App.css";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "cocktail/:id",
                element: <Cocktail />,
            },
            {
                index: true,
                element: <Landing />,
                loader: landingLoader,
                errorElement: <SinglePageError />,
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
