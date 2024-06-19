import fetchRecipeData from "./functions/fetchRecipeData";
import getRecipeById     from "./functions/getRecipeById";

function myFunction(){
    const input = document.getElementById("recipe-search-field");
    const userInput = input.value

    fetchRecipeData(userInput)
    getRecipeById()

}

document.getElementById('button').addEventListener('click', myFunction)