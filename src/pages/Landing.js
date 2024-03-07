import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CocktailList from "components/CocktailList";
import SearchForm from "components/SearchForm";

const CocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm) => {
    return {
        queryKey: ["search", searchTerm || "all"],
        queryFn: async () => {
            const response = await axios.get(`${CocktailUrl}${searchTerm}`);

            return response.data.drinks;
        },
    };
};

//Vì ta đã invoke loader ở bên App vì thế nên ở đây loader là fnc return về một fnc
export const loader =
    (queryClient) =>
    async ({ request }) => {
        const url = new URL(request.url);

        const searchTerm = url.searchParams.get("search") || ""; // search là name của input

        // Để ý là loader bây giờ sẽ là loader global thay vì local giống như ta test ban nãy
        // vì h đây data và loading đã được get pre-fetch
        await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));

        return { searchTerm };
    };

function Landing() {
    const { searchTerm } = useLoaderData();

    //Ở đây page vẫn bị loading sau khi data được display
    // -> Ta muốn loading trước khi data được display
    // -> Muốn vậy thì loading phải trước khi get data ( ở loader)
    const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));
    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <CocktailList drinks={drinks} />
        </>
    );
}

export default Landing;
