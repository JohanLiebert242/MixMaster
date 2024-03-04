import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx("wrapper")}>
            <div className={cx("nav-center")}>
                <span className={cx("logo")}>MixMaster</span>
                <div className={cx("nav-links")}>
                    <NavLink className={cx("nav-link")} to="/">
                        Home
                    </NavLink>
                    <NavLink className={cx("nav-link")} to="/about">
                        About
                    </NavLink>
                    <NavLink className={cx("nav-link")} to="/newsletter">
                        Newsletter
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
