import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import styles from "./Cocktail.module.scss";
import classNames from "classnames/bind";

import { useQuery } from "@tanstack/react-query";

const cx = classNames.bind(styles);

const singleDrinkUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
    return {
        queryKey: ["cocktail", id],
        queryFn: async() => {
            const { data } = await axios.get(`${singleDrinkUrl}${id}`);

            return data
        },
    };
};

export const loader = queryClient => async ({ params }) => {
    const { id } = params;

    await queryClient.ensureQueryData(singleCocktailQuery(id));

    return { id };
};

function Cocktail() {
    const { id, drinks } = useLoaderData();

    const {data} = useQuery(singleCocktailQuery(id));

    if (!drinks) return <Navigate to="/" />; // id không tồn tại

    const singleDrink = drinks[0];

    const {
        strDrink: name,
        strAlcoholic: isAlcoholic,
        strDrinkThumb: img,
        strGlass: isGlass,
        strCategory: cate,
        strInstructions: instructions,
    } = singleDrink;

    const validIngredients = Object.keys(singleDrink)
        .filter(
            (key) =>
                key.startsWith("strIngredient") && singleDrink[key] !== null
        )
        .map((key) => singleDrink[key]);

    return (
        <>
            <header>
                <Link to="/" className="btn btn-cocktail">
                    Back to home
                </Link>
                <h3>{name}</h3>
            </header>
            <div className={cx("drink")}>
                <img src={img} alt={name} className="img img-cocktail" />
                <div className={cx("drink-info")}>
                    <p>
                        <span className={cx("drink-data")}>Name:</span>
                        {name}
                    </p>

                    <p>
                        <span className={cx("drink-data")}>Category:</span>
                        {cate}
                    </p>

                    <p>
                        <span className={cx("drink-data")}>Info:</span>
                        {isAlcoholic}
                    </p>

                    <p>
                        <span className={cx("drink-data")}>Glass:</span>
                        {isGlass}
                    </p>

                    <p>
                        <span className={cx("drink-data")}>Ingredients:</span>
                        {validIngredients.map((ingredient, index) => (
                            <span key={index}>
                                {ingredient}
                                {index < validIngredients.length - 1
                                    ? ", "
                                    : ""}
                            </span>
                        ))}
                    </p>

                    <p>
                        <span className={cx("drink-data")}>Instructions:</span>
                        {instructions}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Cocktail;
