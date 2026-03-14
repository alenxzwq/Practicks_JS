const addDays = (date, days = 1) => {
  const daysInMs = days * 24 * 60 * 60 * 1000;
  
  const newTimestamp = date.getTime() + daysInMs;
  
  return new Date(newTimestamp);
}

const currentDate = new Date();
console.log('Текущая дата:', currentDate);

const futureDate = addDays(currentDate, 5);
console.log('Через 5 дней:', futureDate);

const nextDay = addDays(currentDate);
console.log('Завтра:', nextDay);