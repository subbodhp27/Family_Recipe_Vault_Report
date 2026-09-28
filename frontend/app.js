const API = 'http://localhost:5000/recipes';

async function loadRecipes() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById('recipes');
    if (!container) return;

    container.innerHTML = '';

    data.forEach(r => {
        container.innerHTML += `
        <div class="card">
            <h3>${r.title}</h3>
            <button onclick="viewRecipe('${r._id}')">View</button>
        </div>`;
    });
}

function viewRecipe(id) {
    window.location.href = `recipe.html?id=${id}`;
}

async function addRecipe() {
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, ingredients, instructions })
    });

    alert('Recipe Added!');
}

loadRecipes();
