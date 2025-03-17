let container = document.getElementById("container");
const grid = document.getElementById("grid");
let ageInput = document.getElementById("age");
let filterButton = document.getElementById("filterButton");

const data = await (await fetch("opdracht2_bijlage.json")).json();



data.forEach(getDataForPerson);

function getDataForPerson(person) {
    let personContainer = document.createElement("div");
    personContainer.classList.add("person");

    let voornaam = document.createElement("p");
    voornaam.innerText = `Voornaam: ${person.voornaam}`;
    personContainer.appendChild(voornaam);

    let achternaam = document.createElement("p");
    achternaam.innerText = `Achternaam: ${person.achternaam}`;
    personContainer.appendChild(achternaam);

    let nationaliteit = document.createElement("p");
    nationaliteit.innerText = `Nationaliteit: ${person.nationaliteit}`;
    personContainer.appendChild(nationaliteit);

    let leeftijd = document.createElement("p");
    leeftijd.innerText = `Leeftijd: ${person.leeftijd}`;
    personContainer.appendChild(leeftijd);

    let gewicht = document.createElement("p");
    gewicht.innerText = `Gewicht: ${person.gewicht}`;
    personContainer.appendChild(gewicht);

    grid.appendChild(personContainer);
}

function filterAges (data, age) {
return data.filter(person => {
    return person.leeftijd >= age
});
}

filterButton.addEventListener("click", () => {
    let age = parseInt(ageInput.value);
    let filteredData = filterAges(data, age);
    grid.innerHTML = "";
    filteredData.forEach(getDataForPerson);
});