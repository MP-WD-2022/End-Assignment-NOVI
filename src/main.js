import fetchRecipeData from "./functions/fetchRecipeData";
import getRecipeById     from "./functions/getRecipeById";
import fetchGroupOfRecipes from "./functions/fetchGroupOfRecipes";

const findRecipeButton = document.getElementById("find-recipes-button");
findRecipeButton.addEventListener("click", fetchGroupOfRecipes);

function myFunction(){
    const input = document.getElementById("recipe-search-field");
    const userInput = input.value

    fetchRecipeData(userInput)
    getRecipeById()

}

document.getElementById('button').addEventListener('click', myFunction)



