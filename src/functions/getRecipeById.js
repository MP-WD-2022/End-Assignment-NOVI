import {getRandomInt} from '../helpers/getRandomInt';
import axios from "axios";

const API_ID = "5644587d"; // Replace with your app_id
const API_KEY = "17843108b9fac140434ab2a2ccb2655b"; // Replace with your app_key

const BASE_URL = `https://api.edamam.com/api/recipes/v2/`;

async function fetchRecipeById() {
    try {
        const RECIPE_ID = getRandomInt(1, 100); // Replace with the actual recipe ID you want to fetch

        const response = await axios.get(BASE_URL + RECIPE_ID, {
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY
            }
        });

        const recipe = response.data.recipe;

        console.log('Recipe:', recipe.label);
        console.log('Ingredients:', recipe.ingredientLines);
        console.log('URL:', recipe.url);
    } catch (error) {
        console.error('Error fetching recipe by ID:', error);
        if (error.response) {
            if (error.response.status === 404) {
                console.error('Recipe not found');
            } else if (error.response.status === 500) {
                console.error('Internal server error');
            } else {
                console.error('An error occurred:', error.message);
            }
        }
    }
}

export default fetchRecipeById;