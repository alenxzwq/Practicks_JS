let correctAnswers = 0;
let incorrectAnswers = 0;

const question1 = 'Сколько будет 2 + 2?';
const correctAnswer1 = 4;
const userAnswer1 = Number(prompt(question1).trim());

if (userAnswer1 === correctAnswer1) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const question2 = 'Сколько будет 2 * 2?';
const correctAnswer2 = 4;
const userAnswer2 = Number(prompt(question2).trim());

if (userAnswer2 === correctAnswer2) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const correctAnswer3 = 1;
const userAnswer3 = Number(prompt(question3).trim());

if (userAnswer3 === correctAnswer3) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const correctAnswer4 = 12;
const userAnswer4 = Number(prompt(question4).trim());

if (userAnswer4 === correctAnswer4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const question5 = 'Сколько будет 2 + 2 * 2?';
const correctAnswer5 = 6;
const userAnswer5 = Number(prompt(question5).trim());

if (userAnswer5 === correctAnswer5) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);