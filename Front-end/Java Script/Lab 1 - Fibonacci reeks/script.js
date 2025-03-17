function generateFibonacciArray(n) {
    let fibonacciArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
    return fibonacciArray;
}

const fibonacciElement = document.getElementById('fibonacci');
let fibonacciArray = generateFibonacciArray(12);
fibonacciElement.textContent = fibonacciArray.join(', ');