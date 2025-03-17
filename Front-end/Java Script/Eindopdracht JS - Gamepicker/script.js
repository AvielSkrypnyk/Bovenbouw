const data = await (await fetch("games.json")).json();
let chosenGames = [];

const gameList = document.getElementById('total-overview');
const genreDropdown = document.getElementById('genre-dropdown');
const priceInput = document.getElementById('priceInput');
const ratingInput = document.getElementById('ratingInput');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const calculatePriceButton = document.getElementById('calculatePriceButton');
const backButton = document.getElementById('backButton');

getAllGames();
getAllGenres();

document.getElementById('okGenreButton').addEventListener('click', genreFilter);
document.getElementById('okPriceButton').addEventListener('click', priceFilter);
document.getElementById('okRatingButton').addEventListener('click', ratingFilter);
calculatePriceButton.addEventListener('click', showCart);
backButton.addEventListener('click', showOverview);

function getAllGames() {
    gameList.innerHTML = '';
    data.forEach((game, index) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('data-genre', game.genre);
        gameItem.setAttribute('data-price', game.price);
        gameItem.setAttribute('data-rating', game.rating);
        gameItem.innerHTML = `
            <span class="checkbox-wrapper-18">
                <div class="round">
                    <input type="checkbox" id="game-${index}" data-title="${game.title}" data-price="${game.price}" />
                    <label for="game-${index}"></label>
                </div>
            </span>
            <span class="game-info">
                <span class="game-title">${game.title}</span>
                <span class="game-price">€${game.price}</span>
            </span>
        `;
        const checkBox = gameItem.querySelector('input')
        checkBox.addEventListener('change', (e) => {
            if (e.target.checked) {
                chosenGames.push(game);
            } else {
                chosenGames = chosenGames.filter(g => g.title !== game.title);
            }
        });
        checkBox.checked = chosenGames.some(g => g.title === game.title);
        gameList.appendChild(gameItem);
    });
}

function getAllGenres() {
    const genres = [...new Set(data.map(game => game.genre))];
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.innerText = genre;
        genreDropdown.appendChild(option);
    });
}

function filterGames(filters) {
    const games = document.querySelectorAll('.game-item');
    games.forEach(game => {
        let isVisible = true;
        for (let attribute in filters) {
            if (attribute === 'price' && parseFloat(game.getAttribute(`data-${attribute}`)) <= filters[attribute]) {
                console.log(parseFloat(game.getAttribute(`data-${attribute}`)), filters[attribute]);
                isVisible = true;
            } else if (attribute === 'rating' && parseInt(game.getAttribute(`data-${attribute}`)) >= filters[attribute]) {
                isVisible = true;
                console.log(parseInt(game.getAttribute(`data-${attribute}`)), filters[attribute]);
            } else if (game.getAttribute(`data-${attribute}`) !== filters[attribute]) {
                isVisible = false;
            }
        }
        game.style.display = isVisible ? 'flex' : 'none';
    });
}

function genreFilter() {
    const selectedGenre = genreDropdown.value;
    filterGames({ genre: selectedGenre });
}

function priceFilter() {
    const selectedPrice = parseFloat(priceInput.value);
    filterGames({ price: selectedPrice });
}

function ratingFilter() {
    const selectedRating = parseFloat(ratingInput.value);
    filterGames({ rating: selectedRating });
}

function showCart() {
    document.getElementById('total-overview').style.display = 'none';
    document.getElementById('shopping-cart').style.display = 'block';
    calculatePriceButton.style.display = 'none';
    displayCartItems();
}

function showOverview() {
    document.getElementById('total-overview').style.display = 'block';
    document.getElementById('shopping-cart').style.display = 'none';
    calculatePriceButton.style.display = 'block';
    getAllGames();
}

function displayCartItems() {
    cartItems.innerHTML = '';
    chosenGames.forEach(game => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span class="game-title">${game.title}</span>
            <span class="game-price">€${game.price}</span>
            <button class="remove-button" data-title="${game.title}">Verwijder</button>
        `;
        cartItem.querySelector('.remove-button').addEventListener('click', (e) => {
            chosenGames = chosenGames.filter(g => g.title !== game.title);
            displayCartItems();
            calculateTotal();
        });
        cartItems.appendChild(cartItem);
    });
    calculateTotal();
}

function calculateTotal() {
    const total = chosenGames.reduce((sum, game) => sum + game.price, 0);
    totalPriceElement.innerText = `Totaal: €${total}`;
}