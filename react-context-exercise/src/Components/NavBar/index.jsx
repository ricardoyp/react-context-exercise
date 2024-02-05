import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Go to home page</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};
