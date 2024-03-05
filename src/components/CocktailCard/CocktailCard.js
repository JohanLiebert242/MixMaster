import styles from "./CocktailCart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CocktailCard({ id, isAlcoholic, name, image, isGlass }) {
    return (
            <article className={cx('wrapper')}>
                <div className={cx("img-container")}>
                    <img className="img" src={image} alt={name} />
                </div>
                <div className={cx("footer")}>
                    <h4>{name}</h4>
                    <h5>{isGlass}</h5>
                    <p>{isAlcoholic}</p>
                    <Link className="btn" to={`/cocktail/${id}`}>
                        Details
                    </Link>
                </div>
            </article>
    );
}

export default CocktailCard;
