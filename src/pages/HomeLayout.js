import { Outlet, Link } from "react-router-dom";

function HomeLayout() {
    return (
        <>
            <nav>Navbar here</nav>
            <Outlet />
        </>
    );
}

export default HomeLayout;
