const userTextInput = prompt('Введите текст');
const userText = userTextInput.trim();
const wordFromTextInput = prompt('Введите слово из текста');
const wordFromText = wordFromTextInput.trim();
const indexOfWord = userText.indexOf(wordFromText);

let slicedText;
if (indexOfWord !== -1) {
    slicedText = userText.slice(0, indexOfWord + wordFromText.length);
} else {
    slicedText = 'Слово не найдено в тексте';
}

alert(`Результат: ${slicedText}`);