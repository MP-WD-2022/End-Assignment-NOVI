import {getRandomInt} from '../helpers/getRandomInt';
import axios from "axios";

const API_ID = "5644587d";
const API_KEY = "17843108b9fac140434ab2a2ccb2655b";

const BASE_URL = `https://api.edamam.com/api/recipes/v2/`;

async function getRecipeById() {
    try {
        const RECIPE_ID = getRandomInt(1, 100);

        const response = await axios.get(BASE_URL + RECIPE_ID,
            {
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY
            }
        });

        const recipe = response.data.recipe;

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

export default getRecipeById;



