import axios from 'axios';
import createRecipeCard from "./createRecipeCard.js";

// Fetching data from Edamam API
export default async function fetchRecipeData( searchQuery, mealType, diet, cuisineType, usedFunction ){
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
                    q: searchQuery,
                    mealType: mealType || null,
                    diet: diet || null,
                    cuisineType: cuisineType || null,
                    random: true
                }
            } )
        // Store recipe key in variable
        const arrayOfRecipes = response.data.hits

        createRecipeCard( arrayOfRecipes )

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