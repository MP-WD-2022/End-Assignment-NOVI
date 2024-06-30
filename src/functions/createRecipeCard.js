export default function createRecipeCard ( recipesArr ) {

    const recipeList = document.getElementById('recipe-card-list')

    recipeList.textContent = "";

    recipesArr.map(( item ) => {
        // create a li item per recipe
        const recipeItem = document.createElement('li');
        recipeItem.setAttribute('class', 'recipe-list-item');

        // create a h5 item per recipe
        const recipeTitle = document.createElement('h5');
        recipeTitle.setAttribute('class', 'recipe-title');
        recipeTitle.textContent = `${ item.recipe.label }`;

        // create an img item per recipe
        const recipeImg = document.createElement('img');
        recipeImg.setAttribute('class', 'recipe-img');
        recipeImg.setAttribute('src', `${ item.recipe.image }`)

        // create paragraph text in element
        const recipeText = document.createElement('p');
        recipeText.setAttribute('class', 'card--label');
        recipeText.textContent = `${ Math.round(item.recipe.calories) } Calories | ${item.recipe.ingredientLines.length} ingredients`

        // create time paragraph in element
        const recipeTime = document.createElement('p');
        recipeTime.setAttribute('class', 'card--time');
        recipeTime.textContent = `${ item.recipe.totalTime } min`

        // append li with h3 and img
        recipeItem.appendChild(recipeTitle);
        recipeItem.appendChild(recipeImg);
        recipeItem.appendChild(recipeText);
        recipeItem.appendChild(recipeTime);

        // append ul with li
        recipeList.appendChild(recipeItem);

    })

}

