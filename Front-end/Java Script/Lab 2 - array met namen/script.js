let names = []
let howManyNames = 0
let totalNamesToEnter = 0

function checkInput() {
    while (howManyNames < 3) {
        howManyNames = parseInt(prompt("How many names do you want to enter? (minimum 3):") || 3)
        totalNamesToEnter = howManyNames
    }

    while (names.length < totalNamesToEnter) {
        let name = prompt(`Enter a name (${howManyNames} names required):`)
        if (name) {
            names.push(name)
            howManyNames -= 1
        }
    }

    alert(`You have entered ${totalNamesToEnter} names`)

    document.getElementById("outputNames").innerText = "De ingevoerde namen in de array zijn: " + names.join(", ")
    document.getElementById("outputNamesReverse").innerText = "De ingevoerde namen in de array in omgekeerde volgorde zijn: " + [...names].reverse().join(", ")
}
