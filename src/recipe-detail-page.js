
document.addEventListener('DOMContentLoaded', function (event)  {
    event.preventDefault();

    const parameters = new URLSearchParams( window.location.search );
    // console.log( parameters );
    const id = parameters.get("id");
    // console.log( id );
    const showIdOnPage = document.getElementById( 'recipe-id' );
    showIdOnPage.textContent = id;

    createRecipePage ( id )
});