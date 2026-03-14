const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (nextBirthdayDate) => {
  const currentDate = new Date(); 
  const timeDiff = nextBirthdayDate - currentDate; 
  
  return convertMsToDays(timeDiff);
}

const today = new Date();
const nextBirthday = new Date(2026, 4, 15); 

console.log(getDaysBeforeBirthday(nextBirthday)); 