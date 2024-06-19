// export default function createRecipeCard ( arr ) {
//     const recipeList = document.getElementById('recipe-card-list');
//     recipeList.innerHTML = "";
//     arr.map( ( item ) => {
//         recipeList.innerHTML += `
//                 <li>
//                     <h3>${ item.recipe.label }</h3>
//                     <img src="${ item.recipe.image }" alt="${ item.recipe.label }" />
//                 </li>
//             `
//     } )
// }


// export default function createRecipeCard( arr ) {
// //     export default function createRecipeCard() {
// //         console.log( "createRecipeCard werkt!" );
// //     }


//     const recipeList = document.getElementById( "recipe-card-list" ); // ('') of ("")?
//
//     arr.map(( item ) => {
//         const recipeUri = item.recipe.uri;
//         const recipeId = recipeUri.split( "_" )[1]; // ('') of ("")?
//         // console.log( recipeId );
//         // const id = recipeId
//
//         // create a li element per recipe
//         const recipeItem = document.createElement("li" ); // ('') of ("")?
//         recipeItem.setAttribute("class", "recipe-list-item" ); // ('') of ("")?
//
//         // create a link element per recipe
//         const recipeLink = document.createElement("a" ); // ('') of ("")?
//         recipeLink.setAttribute("href", 'pages/recipe-page.html?id=${ recipeId }'); // ('') of ("")?
//
//         // create a h3 element per recipe
//         const recipeTitle = document.createElement("h3" ); // ('') of ("")?
//         recipeTitle.setAttribute("class", "recipe-title" ); // ('') of ("")?
//         recipeTitle.textContent = `${ item.recipe.label }`; // innerContent of textContent?
//
//         // create an img element per recipe
//         const recipeImg = document.createElement("img" );
//         recipeImg.setAttribute("src", '${ item.recipe.image }');
//         recipeImg.setAttribute("alt", '${ item.recipe.label }')
//
//         // // create paragraph text in element
//         // const recipeText = document.createElement('p');
//         // recipeText.setAttribute('class', 'card--label');
//         // recipeText.textContent = `${Math.round(item.recipe.calories)} Calories | ${item.recipe.ingredientLines.length} ingredients`
//         //
//         // // create time paragraph in element
//         // const recipeTime = document.createElement('p');
//         // recipeTime.setAttribute('class', 'card--time');
//         // recipeTime.textContent = `${item.recipe.totalTime} min`
//
//         // append link with h3 and img element
//         recipeLink.appendChild( recipeTitle );
//         recipeLink.appendChild( recipeImg );
//
//         // append li with link element
//         recipeItem.appendChild( recipeLink );
//
//         // append ul with li element
//         recipeList.appendChild( recipeItem );
//
//     });
//
// }


export default function createRecipeCard ( recipesArr ) {


    console.log(recipesArr)
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

