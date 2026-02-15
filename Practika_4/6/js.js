const numbers = [10, 4, 100, -5, 54, 2];

function sumOfCubesFor(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] ** 3; 
    }
    return sum;
}
console.log('1. Цикл for:', sumOfCubesFor(numbers)); // 1158411


function sumOfCubesForOf(array) {
    let sum = 0;
    for (let number of array) {
        sum += number ** 3;
    }
    return sum;
}
console.log('2. Цикл for of:', sumOfCubesForOf(numbers)); // 1158411


function sumOfCubesForEach(array) {
    let sum = 0;
    array.forEach(number => {
        sum += number ** 3;
    });
    return sum;
}
console.log('3. Метод forEach:', sumOfCubesForEach(numbers)); // 1158411


function sumOfCubesReduce(array) {
    return array.reduce((accumulator, number) => {
        return accumulator + number ** 3;
    }, 0); 
}

console.log('4. Метод reduce:', sumOfCubesReduce(numbers)); 

const sumReduce = numbers.reduce((acc, num) => acc + num ** 3, 0);
console.log('Короткий reduce:', sumReduce); 

