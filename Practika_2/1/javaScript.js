const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

const userLoginInput = prompt('Введите логин');
const userLogin = userLoginInput.trim();

const userPasswordInput = prompt('Введите пароль');
const userPassword = userPasswordInput.trim();

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert('Логин и (или) Пароль введены неверно!');
}