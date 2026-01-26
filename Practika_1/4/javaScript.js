const userName = prompt('Как вас зовут?');
const formattedUserName = userName.toLowerCase().trim();
const userAge = prompt('Сколько вам лет?');
const formattedUserAge = Number(userAge.trim());


alert(`Вас зовут ${formattedUserName} и вам ${formattedUserAge} лет`);