const goals = [8, 1, 1, 3, 2, -1, 5];
const maxGoals = Math.max(...goals);
const maxIndex = goals.indexOf(maxGoals);
alert(`Самый результативный матч был под номером ${maxIndex + 1}. В нем было забито ${maxGoals} гол(ов).`);


const validGoals = goals.filter(goal => goal >= 0); 
const minGoals = Math.min(...validGoals);
const minIndexes = [];

goals.forEach((goal, index) => {
    if (goal === minGoals) {
        minIndexes.push(index + 1); 
    }
});

alert(`Самые нерезультативные матчи были под номерами ${minIndexes.join(', ')}. В каждом из них было забито по ${minGoals} мячу(a).`);

const totalGoals = validGoals.reduce((sum, goal) => sum + goal, 0);
alert(`Общее количество голов за сезон равно ${totalGoals}`);

const hasForfeit = goals.some(goal => goal < 0);
alert(`Были автоматические поражения: ${hasForfeit ? 'да' : 'нет'}`);

const averageGoals = totalGoals / validGoals.length;
alert(`Среднее количество голов за матч равно ${averageGoals.toFixed(2)}`);

const sortedGoals = [...goals].sort((a, b) => a - b);
alert(`Голы в порядке возрастания: ${sortedGoals.join(', ')}`);

console.log('Исходный массив:', goals); 