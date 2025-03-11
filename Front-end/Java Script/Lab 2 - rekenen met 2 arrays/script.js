let arrayOne = [1,2,3,4,5,6,7,8,9,10]
let arrayTwo = [2,4,6,8,10,12,14,16,18,20]
let arithmeticAction = ['+', '-', '*', '/']

function arrayAction(arrayOne, arrayTwo, arithmeticAction) {
    let result = []
    for (let i = 0; i < arrayOne.length; i++) {
        switch (arithmeticAction) {
            case "+":
                result.push(arrayOne[i] + arrayTwo[i])
                break
            case "-":
                result.push(arrayOne[i] - arrayTwo[i])
                break
            case "*":
                result.push(arrayOne[i] * arrayTwo[i])
                break
            case "/":
                result.push(arrayOne[i] / arrayTwo[i])
                break
        }
    }
    return result
}

function arrayText(arrayOne, arrayTwo, arithmeticAction) {
    let result = []
    let actionResults = arrayAction(arrayOne, arrayTwo, arithmeticAction);
    for (let i = 0; i < arrayOne.length; i++) {
        result.push(`${arrayOne[i]} ${arithmeticAction} ${arrayTwo[i]} = ${actionResults[i]}`);
    }
    return result
}

document.getElementById("arraysAdd").innerText = arrayText(arrayOne, arrayTwo, '+').join('\n');
document.getElementById("arraysSubtract").innerText = arrayText(arrayTwo, arrayOne, '-').join('\n');
document.getElementById("arraysMultiply").innerText = arrayText(arrayOne, arrayTwo, '*').join('\n');
document.getElementById("arraysDivide").innerText = arrayText(arrayTwo, arrayOne, '/').join('\n');