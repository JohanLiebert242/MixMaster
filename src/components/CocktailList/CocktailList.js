import CocktailCard from "components/CocktailCard";
import styles from './CocktailList.module.scss';

function CocktailList({ drinks }) {
    if (!drinks) {
        return (
            <div className={styles.wrapper}>
                <h4>No cocktail matching your search. Please try again!</h4>
            </div>
        );
    }

    console.log(drinks);

    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
            item;
        return {
            id: idDrink,
            isAlcoholic: strAlcoholic,
            name: strDrink,
            image: strDrinkThumb,
            isGlass: strGlass,
        };
    });

    return <div className={styles.wrapper}>
        {formattedDrinks.map(item => (
            <CocktailCard key={item.id} {...item} />
        ))} 
    </div>;
}

export default CocktailList;
