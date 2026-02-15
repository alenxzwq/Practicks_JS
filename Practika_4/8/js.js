function getMathResult(expression) {
    if (expression.length < 3) {
        return "Ошибка";
    }
    const validExpression = expression.filter(item => {
        if (item === undefined || item === null) return false;
        const strItem = String(item).trim();
        if (strItem === '') return false;
        return true;
    });
    if (validExpression.length < 3) {
        return "Ошибка";
    }
    const trimmedExpression = validExpression.slice(0, 3);
    
    let firstOperand = trimmedExpression[0];
    let operator = String(trimmedExpression[1]);
    let secondOperand = trimmedExpression[2];
    
    const num1 = Number(firstOperand);
    const num2 = Number(secondOperand);
    if (isNaN(num1) || isNaN(num2)) {
        return "Ошибка";
    }
    
    const validOperators = ['>', '<', '=', '+', '-', '*', '/'];
    if (!validOperators.includes(operator)) {
        return "Ошибка";
    }
    let result;
    
    switch (operator) {
        case '>':
            result = num1 > num2;
            break;
        case '<':
            result = num1 < num2;
            break;
        case '=':
            result = num1 === num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return "Ошибка";
    }
    
    return result;
}

console.log(getMathResult(['200', '++', 300])); 
console.log(getMathResult(['20', '-', '5'])); 
console.log(getMathResult([100, '/', 100]));
console.log(getMathResult([2, '-', 2])); 
console.log(getMathResult(['5', '>', '10'])); 
console.log(getMathResult(['5', '<', '10']));
console.log(getMathResult(['1', '=', 1])); 
console.log(getMathResult(['1', '*', 1])); 

console.log(getMathResult(['100', 'hello', 'javascript', '', 'help200', '+', 4]));
console.log(getMathResult(['5', '+']));
console.log(getMathResult(['abc', '+', 5]));