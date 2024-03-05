import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "components/CocktailList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
    const searchTerm = "";
    const response = await axios.get(`${url}${searchTerm}`);

    return { drinks: response.data.drinks, searchTerm };
};

function Landing() {
    const { drinks } = useLoaderData();
    return (
        <>
            <CocktailList drinks={drinks} />
        </>
    );
}

export default Landing;
