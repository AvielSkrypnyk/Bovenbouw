let arrayPiramide = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function Piramide (arrayPiramide) {
    let piramide = [];
    for (let i = arrayPiramide.length - 1; i >= 0; i--) {
        piramide.push(arrayPiramide.slice(0, i + 1));
    }
    return piramide;
}


document.getElementById("arrayOverview").innerText = arrayPiramide.join(', ');
document.getElementById("piramide").innerText = Piramide(arrayPiramide).join('\n');