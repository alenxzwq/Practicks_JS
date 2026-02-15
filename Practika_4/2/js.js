function getSumOfSequence(number) {
    const sequence = [];
    
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }
    const sum = sequence[0] + sequence[sequence.length - 1];

    return sum;
}

console.log(getSumOfSequence(5));
console.log(getSumOfSequence(10)); 
console.log(getSumOfSequence(1)); 