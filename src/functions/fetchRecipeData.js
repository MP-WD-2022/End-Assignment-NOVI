// tekst indien zoekopdracht geen resultaat oplevert:
// no results matches your search


import axios from "axios";
import createRecipeCard from "./createRecipeCard";
import generateRandomCards from "./generateRandomCards";

// Fetching data from Edamam API
export default async function fetchRecipeData( searchQuery, mealType, diet, cuisineType, usedFunction ){
    console.log(searchQuery)
    // Declare input values for API
    const RECIPE_URI = "https://api.edamam.com";
    const RECIPE_ENDPOINT = "/api/recipes/v2";
    const API_ID = "5644587d";
    const API_KEY = "17843108b9fac140434ab2a2ccb2655b"

    // const FOOD_URI = "https://api.edamam.com";
    // const FOOD_ENDPOINT = "/api/food/v2";

    // If succesfull then....
    try {

        // const responseRecipe = await axios.get( RECIPE_URI + RECIPE_ENDPOINT )
        // const responseFood = await axios.get( FOOD_URI + FOOD_ENDPOINT )

        // Fetch data from API
        const response = await axios.get( RECIPE_URI + RECIPE_ENDPOINT,
            {
                params: {
                    type: "public",
                    app_id: API_ID,
                    app_key: API_KEY,
                    q: searchQuery,
                    mealType: mealType || null,
                    // mealType: mealType || ""
                    // mealType: mealType || "pasta"
                    // mealType: mealType || "dinner"
                    diet: diet || null,
                    cuisineType: cuisineType || null,
                    random: true
                }
            } )
        console.log ( response );
        // Store recipe key in variable
        const arrayOfRecipes = response.data.hits
        // console.log( arrayOfRecipes );

        createRecipeCard( arrayOfRecipes )
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

fetchRecipeData( ); // Input values as arguments

//
// import axios from "axios";
// import createRecipeCard from "./createRecipeCard";

// Fetching data from Edamam API
// export default async function fetchRecipeData( searchQuery, mealType ){
//
//     // Declare input values for API
//     const URI = "https://api.edamam.com";
//     const ENDPOINT = "/api/recipes/v2";
//     const API_ID = "";
//     const API_KEY = ""
//
//     // Fetch data from API
//     try {
//         const response = await axios.get( URI + ENDPOINT, {
//             params: {
//                 type: "public",
//                 app_id: API_ID,
//                 app_key: API_KEY,
//                 q: searchQuery,
//                 mealType: mealType || null
//             }
//         } );
//
//         // Execute function that creates the recipe card
//         const arrayOfRecipes = response.data.hits;
//
//         // console.log( arrayOfRecipes );  // ALLE console.logs verwijderen alvorens inleveren van Eindopdracht!!!
//         /* function createRecipeCard ( arr ) {... */
//
//         createRecipeCard( arrayOfRecipes );
//
//         // Catch error messages and show them in the UI
//     } catch ( e ) {
//         if ( e.response.status === 404 ) {
//             // Execute page not found function
//             console.log( "page not found" );
//         } else if ( e.response.status === 500 ) {
//             // Execute internal server error function
//             console.log( "internal server error" );
//         }
//     }
//
// }
//
// fetchRecipeData( ); // Input values as arguments