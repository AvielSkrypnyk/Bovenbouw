let container = document.getElementById("container");

const data = await (await fetch("opdracht2_bijlage.json")).json();

// let voornaam = document.createElement("p");
// voornaam.innerText = `Voornaam: ${data.voornaam}`;
// container.appendChild(voornaam);

// let achternaam = document.createElement("p");
// achternaam.innerText = `Achternaam: ${data.achternaam}`;
// container.appendChild(achternaam);

// let nationaliteit = document.createElement("p");
// nationaliteit.innerText = `Nationaliteit: ${data.nationaliteit}`;
// container.appendChild(nationaliteit);

// let leeftijd = document.createElement("p");
// leeftijd.innerText = `Leeftijd: ${data.leeftijd}`;
// container.appendChild(leeftijd);

// let gewicht = document.createElement("p");
// gewicht.innerText = `Gewicht: ${data.gewicht}`;
// container.appendChild(gewicht);

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

    container.appendChild(personContainer);
}