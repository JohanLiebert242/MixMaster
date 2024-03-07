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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loader as loaderLanding } from "./pages/Landing";
import { loader as singlePageLoading } from "./pages/Cocktail/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "cocktail/:id",
                element: <Cocktail />,
                errorElement: <SinglePageError />,
                loader: singlePageLoading(queryClient),
            },
            {
                index: true,
                element: <Landing />,
                loader: loaderLanding(queryClient),
                errorElement: <SinglePageError />,
            },
            {
                path: "newsletter",
                element: <Newsletter />,
                action: newsletterAction,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

function App() {
    return(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />;
        </QueryClientProvider>
    )
}

export default App;
