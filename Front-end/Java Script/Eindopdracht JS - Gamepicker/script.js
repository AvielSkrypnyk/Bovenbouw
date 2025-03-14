const data = await (await fetch("games.json")).json();
var chosenGames = [];

const gameList = document.getElementById('game-list');
const genreDropdown = document.getElementById('genre-dropdown');

getAllGames();
getAllGenres();

okGenreButton.addEventListener('click', genreFilter);

function getAllGames() {
    data.forEach((game, index) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('data-genre', game.genre)
        gameItem.setAttribute('data-price', game.price)
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
        gameList.appendChild(gameItem);
    });
}

function getAllGenres() {
    // Create a set of unique genres from the data
    var genres = [...new Set(data.map(game => game.genre
    ))]

    genres.forEach(ganre => {
        const option = document.createElement('option');
        option.innerText = ganre;
        genreDropdown.appendChild(option);
    });
}

function filterGames(attribute, value) {
    var games = document.querySelectorAll('.game-item');
    games.forEach(game => {
        if (game.getAttribute(`data-${attribute}`) === value) {
            game.style.display = 'flex';
        }
        else {
            game.style.display = 'none';
        }
    })
}

function genreFilter() {
    var selectedGenre = genreDropdown.value;
    filterGames('genre', selectedGenre);
}





function toggleShoppingCart() {
    var shoppingCart = document.querySelector('.shopping-cart-popup');
    if (shoppingCart) {
        shoppingCart.classList.toggle('visible');
    }
}

function ShoppingCart() {
    var shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart-popup');
    shoppingCart.innerHTML = `
        <div class="shopping-cart-content">
            <span class="shopping-cart-title">Shopping cart</span>
            <span class="shopping-cart-total">Total: €${calculateTotal()}</span>
            <button class="close-cart" onclick="toggleShoppingCart()">Close</button>
        </div>
    `;
    document.body.appendChild(shoppingCart);
}