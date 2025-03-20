 import axios from "axios";


        // Declare input values for API
        const CALORIE_CALCULATOR_URI = "https://api.edamam.com";
        const CALORIE_CALCULATOR_ENDPOINT = "/api/nutrition-data";
        const API_ID = "f018d099";
        const API_KEY = "88bd9243b591e25a021d13414f8e96ca"

// Fetching data from Edamam API
        async function getProductDataById( searchQuery, usedFunction ) {

            // If succesfull then....
            try {
                // Fetch data from API
                const response = await axios.get( CALORIE_CALCULATOR_URI + CALORIE_CALCULATOR_ENDPOINT ,
                    {
                        params: {
                            type: 'public',
                            app_id: API_ID,
                            app_key: API_KEY,
                            q: searchQuery,
                            random: true
                        }
                    });

                const quantity = response.data.label;

            } catch (error) {
                console.error('Error fetching product-data by ID:', error);
                if (error.response) {
                    if (error.response.status === 404) {
                        console.error('Product not found');
                    } else if (error.response.status === 500) {
                        console.error('Internal server error');
                    } else {
                        console.error('An error occurred:', error.message);
                    }
                }
            }
        }

        export default getProductDataById;



let lastSearchResult = {}; // To store the last search result
let totalCalories = 0;
let totalFat = 0;
let totalCarbs = 0;

// Function to search product by name or barcode
async function searchProduct() {

    // Declare input values for API
    const CALORIE_CALCULATOR_URI = "https://api.edamam.com";
    const CALORIE_CALCULATOR_ENDPOINT = "/api/nutrition-data";
    const API_ID = "f018d099";
    const API_KEY = "88bd9243b591e25a021d13414f8e96ca"

    const query = document.getElementById('product-search').value;
    if (!query) return alert("Please enter a product name or barcode.");

    const response = await fetch(`https://api.edamam.com/products?query=${query}`);
    const data = await response.json();
    lastSearchResult = data;

    // Clear previous product and nutrition data
    document.getElementById('productTable').getElementsByTagName('tbody')[0].innerHTML = '';
    document.getElementById('nutritionTable').getElementsByTagName('tbody')[0].innerHTML = '';

    // Display the product details in the table
    const tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const row = tableBody.insertRow();
    row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.quantity}</td>
                <td>${data.label}</td>
                <td><input type="number" id="servingsInput" placeholder="Servings"></td>
                <td><button onclick="addProduct()">Add</button></td>
            `;
}

// Function to add product servings and fetch nutritional info
async function addProduct() {
    const servings = document.getElementById('servings').value;
    if (!servings || isNaN(servings) || servings <= 0) {
        return alert("Please enter a valid number of servings.");
    }

    const product = lastSearchResult;
    const response = await fetch(`https://api.edamam.com/nutrition?product=${product.name}&servings=${servings}`);
    const data = await response.json();

    // Update the nutrition table with the new data
    const nutritionTableBody = document.getElementById('nutritionTable').getElementsByTagName('tbody')[0];
    const row = nutritionTableBody.insertRow();
    row.innerHTML = `
                <td>${product.name}</td>
                <td>${data.calories}</td>
                <td>${data.fat}</td>
                <td>${data.carbs}</td>
            `;

    // Update the total nutrition values
    totalCalories += data.calories;
    totalFat += data.fat;
    totalCarbs += data.carbs;

    document.getElementById('totalCalories').innerText = totalCalories;
    document.getElementById('totalFat').innerText = totalFat;
    document.getElementById('totalCarbs').innerText = totalCarbs;
}



