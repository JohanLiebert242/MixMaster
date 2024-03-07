import { Form } from "react-router-dom";
import styles from "./SeachForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchForm({ searchTerm }) {
    return (
        <div className={cx("wrapper")}>
            <Form className="form form-search">
                <input
                    type="search"
                    name="search"
                    className="form-input"
                    defaultValue={searchTerm}
                />
                <button className="btn">Submit</button>
            </Form>
        </div>
    );
}

export default SearchForm;
