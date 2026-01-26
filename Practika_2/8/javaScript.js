const password = prompt('Введите пароль');

const isLengthValid = password.length >= 3 && password.length <= 20;
const hasUpperCase = /[A-ZА-Я]/.test(password); 
const hasNumber = /\d/.test(password); 

// Проверяем все условия
if (isLengthValid && hasUpperCase && hasNumber) {
    alert('Пароль валидный. Добро пожаловать в аккаунт');
} else {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
}