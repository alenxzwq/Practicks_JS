function getSumOfNumbers(number, type = "odd") {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    switch (type) {
      case "odd":
        if (i % 2 !== 0) {
          sum += i;
        }
        break;
      case "even":
        if (i % 2 === 0) {
          sum += i;
        }
        break;
      case "":
        sum += i;
        break;
      default:
        console.log('Тип должен быть: "odd", "even" или ""');
        return;
    }
  }

  return sum;
}
console.log(getSumOfNumbers(10, "odd"));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, ""));
