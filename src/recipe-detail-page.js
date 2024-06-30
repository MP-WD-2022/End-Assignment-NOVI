
document.addEventListener('DOMContentLoaded', function (event)  {
    event.preventDefault();

    const parameters = new URLSearchParams( window.location.search );
    const id = parameters.get("id");
    const showIdOnPage = document.getElementById( 'recipe-id' );
    showIdOnPage.textContent = id;

    createRecipePage ( id )
});