import fetchRecipeData from "./functions/fetchRecipeData";

function myFunction(){
    const input = document.getElementById("recipe-search-field");
    const userInput = input.value

    fetchRecipeData(userInput)

}

document.getElementById('button').addEventListener('click', myFunction)