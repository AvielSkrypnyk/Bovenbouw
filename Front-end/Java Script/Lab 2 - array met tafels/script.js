let multiplicandArray = [1,2,3,4,5,6,7,8,9,10]
let arithmeticAction = '*'

function arrayAction(multiplicandArray, multiplierNumber, arithmeticAction) {
    let result = []
    for (let i = 0; i < multiplicandArray.length; i++) {
        switch (arithmeticAction) {
            case "*":
                result.push(multiplicandArray[i] * multiplierNumber)
                break
        }
    }
    return result
}

function arrayText(multiplicandArray, multiplierNumber, arithmeticAction) {
    let result = []
    let actionResults = arrayAction(multiplicandArray, multiplierNumber, arithmeticAction);
    for (let i = 0; i < multiplicandArray.length; i++) {
        result.push(`${multiplicandArray[i]} ${arithmeticAction} ${multiplierNumber} = ${actionResults[i]}`);
    }
    return result
}

document.getElementById("table2").innerText = arrayText(multiplicandArray, 2, '*').join('\n');
document.getElementById("table4").innerText = arrayText(multiplicandArray, 4, '*').join('\n');
document.getElementById("table6").innerText = arrayText(multiplicandArray, 6, '*').join('\n');
document.getElementById("table8").innerText = arrayText(multiplicandArray, 8, '*').join('\n');