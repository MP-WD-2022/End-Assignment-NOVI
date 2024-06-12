// function to create 3 random recipe cards with data from fetchRecipeData
export default function generateRandomCards(arr){
    console.log("arr" , arr)
    // get elements from HTML to be injected
    const randomCards = document.getElementById("random-recipe-card-list")
    // line to empty the page
    randomCards.innerHTML = ""
    // Map function that stops at 3 by slice
    arr.slice(0,3).map((item) => {
        // variables to remember item id if clicked upon
        const recipeUri = item.recipe.uri
        const recipeId = recipeUri.split("_")[1]
        console.log(recipeId)
// inject recipe data into html
        randomCards.innerHTML += `
            <li class="random-card-wrapper general-card-style">
                <a href="/recipe-detail-page.html?id=${recipeId}">
                    <img class="recipe-card-img" src="${item.recipe.image}" alt="${item.recipe.label}">
                    <div class="recipe-card-text-wrapper random-card-text-wrapper">
                        <p>${item.recipe.label}</p>
                        <div class="space-between-wrap-recipe-cards">
                            <span> ${Math.round(item.recipe.calories)} Calories | ${item.recipe.ingredients.length} ingredients</span>
                            <div class="time-icon-recipe-card"></div><span>${item.recipe.totalTime}  min.</span>
                        </div>
                    </div>
                </a>
            </li>
            `
    })

}