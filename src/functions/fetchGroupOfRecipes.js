import generateRandomCards from "./generateRandomCards.js";
import axios from 'axios';

// Fetching data from Edamam API
async function fetchGroupOfRecipes( ){

    // Declare input values for API
    const RECIPE_URI = "https://api.edamam.com";
    const RECIPE_ENDPOINT = "/api/recipes/v2";
    const API_ID = "5644587d";
    const API_KEY = "17843108b9fac140434ab2a2ccb2655b"

    // If succesfull then....
    try {

        // Fetch data from API
        const response = await axios.get( RECIPE_URI + RECIPE_ENDPOINT,
            {
                params: {
                    type: "public",
                    app_id: API_ID,
                    app_key: API_KEY,
                    mealType: "dinner",
                    random: true
                }
            } )

        const arrayOfRecipes = response.data.hits.sort(() => Math.random() - 0.5).slice(0, 3);


        generateRandomCards( arrayOfRecipes )

        // Catch error messages and show them in the UI
    } catch ( e ) {
        console.error(e)
        const error = document.getElementById('error-message')
        if ( e.response.status === 404 ) {
            error.innerContent = 'page not found'
        } else if ( e.response.status === 500 ) {
            error.innerContent = 'internal server error'
        }
    }

}

export default fetchGroupOfRecipes;