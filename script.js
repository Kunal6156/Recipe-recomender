const vegetarianApiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
const nonVegetarianApiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'; // Example for chicken recipes

function defaultFn() {
    // Fetch vegetarian recipes on page load by default
    fetchVegetarianRecipes();
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const userIn = document.getElementById('searchInput').value.trim();
    if (userIn !== '') {
        searchFn(userIn);
    } else {
        alert('Please enter a recipe name.');
    }
});

// Dropdown change event
document.getElementById('recipeType').addEventListener('change', (event) => {
    if (event.target.value === 'vegetarian') {
        fetchVegetarianRecipes();
    } else {
        fetchNonVegetarianRecipes();
    }
});

document.addEventListener('click', (event) => {
    if (event.target.className === 'show-recipe-btn') {
        const rId = event.target.getAttribute('data-id');
        modalFn(rId);
    }
    if (event.target.id === 'closeBtn') {
        closeModalFn();
    }
});

// Function to fetch vegetarian recipes
function fetchVegetarianRecipes() {
    fetch(vegetarianApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log('Vegetarian Recipes:', data); // Log the data for debugging
            if (data.meals) {
                showRecpsFn(data.meals);
            } else {
                noRecFn();
            }
        })
        .catch(error => console.error('Error fetching vegetarian recipes:', error));
}

// Function to fetch non-vegetarian recipes
function fetchNonVegetarianRecipes() {
    fetch(nonVegetarianApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log('Non-Vegetarian Recipes:', data); // Log the data for debugging
            if (data.meals) {
                showRecpsFn(data.meals);
            } else {
                noRecFn();
            }
        })
        .catch(error => console.error('Error fetching non-vegetarian recipes:', error));
}

// Search function to fetch recipes based on user input
function searchFn(query) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url)
        .then(res => res.json())
        .then(tmp => {
            console.log('Search Results:', tmp); // Log the data for debugging
            if (tmp.meals) {
                showRecpsFn(tmp.meals);
            } else {
                noRecFn();
            }
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

// Function to display recipes in the container
function showRecpsFn(recipes) {
    const rCont = document.getElementById('recipeContainer');
    rCont.innerHTML = '';
    recipes.slice(0, 20).forEach(recipe => {
        const c = document.createElement('div');
        c.classList.add('animate__animated', 'animate__fadeIn', 'recipe-card');

        // Use fallback values if certain fields are undefined
        const title = recipe.strMeal || 'No Title Available';
        const imageUrl = recipe.strMealThumb || 'default-image-url.jpg';

        c.innerHTML = `
            <h3>${title}</h3>
            <img src="${imageUrl}" alt="${title}">
            <button class="show-recipe-btn" data-id="${recipe.idMeal}">Show Recipe</button>
        `;
        rCont.appendChild(c);
    });
}

// Function to handle no recipe found
function noRecFn() {
    const rCont = document.getElementById('recipeContainer');
    rCont.innerHTML = '<p>No Recipe found</p>';
}

// Function to show recipe details in a modal
function modalFn(recipeId) {
    const mData = document.getElementById('modalContent');
    mData.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(response => response.json())
        .then(data => {
            console.log('Recipe Details:', data); // Log the data for debugging
            const rep = data.meals[0];
            const title = rep.strMeal || 'No Title Available';
            const category = rep.strCategory || 'Unknown Category';
            const area = rep.strArea || 'Unknown Area';
            const instructions = formatFn(rep.strInstructions) || 'No instructions available.';

            mData.innerHTML = `
                <h2>${title}</h2>
                <h3>Category: ${category}</h3>
                <h3>Area: ${area}</h3>
                <img src="${rep.strMealThumb}" alt="${title}" class="modal-image"> <!-- Smaller modal image -->
                <h3>Instructions:</h3>
                <p>${instructions}</p>
                <button id="closeBtn">Close</button>
            `;
            document.getElementById('recipeModal').style.display = 'block';
        })
        .catch(error => console.error('Error fetching recipe details:', error));
}

// Function to format instructions
function formatFn(instructions) {
    return instructions ? instructions.split('\r\n').filter(instruction => instruction.trim() !== '').join('<br>') : '';
}

// Function to close the modal
function closeModalFn() {
    document.getElementById('recipeModal').style.display = 'none';
}

// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initialize with vegetarian recipes
defaultFn();
