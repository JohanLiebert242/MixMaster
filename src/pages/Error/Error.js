import { useRouteError, Link } from "react-router-dom";
import styles from "./Error.module.scss";
import classNames from "classnames/bind";
import img from "assets/not-found.svg";

const cx = classNames.bind(styles);

function Error() {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <div className={cx("wrapper")}>
                <div>
                    <img className={cx("img")} src={img} alt="not found" />
                    <h3 className={cx("reminder")}>Whoops!!!</h3>
                    <p className={cx("text")}>
                        Looks like page went on vacation
                    </p>
                    <Link to="/">Back to home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div>
                <h3>Something went wrong...</h3>
            </div>
        </div>
    );
}

export default Error;
