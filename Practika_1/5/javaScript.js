const userString = prompt('Введите текст для обрезки');
const trimmedString = userString.trim();
const startSliceIndexInput = prompt('Введите индекс, с которого нужно начать обрезку строки');
const startSliceIndex = Number(startSliceIndexInput.trim());
const endSliceIndexInput = prompt('Введите индекс, которым нужно закончить обрезку строки');
const endSliceIndex = Number(endSliceIndexInput.trim());

const slicedString = trimmedString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${slicedString}`);