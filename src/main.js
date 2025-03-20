import fetchGroupOfRecipes from "./functions/fetchGroupOfRecipes.js";
import fetchRecipeData from "./functions/fetchRecipeData.js";

const findRecipeButton = document.getElementById("find-recipes-button");
findRecipeButton.addEventListener("click", fetchGroupOfRecipes);
const input = document.getElementById("recipe-search-field");

// line to empty the recipe search field
input.innerHTML = ""

function myFunction() {
    if (input.value) {
        fetchRecipeData(input.value)
    } else {
    }    // void getRecipeById()
 }document.getElementById('button').addEventListener('click', myFunction);