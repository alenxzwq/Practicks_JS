function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: function(enemy) {
        enemy.health -= 10;
        console.log(`${this.name} атакует ${enemy.name}! У ${enemy.name} осталось ${enemy.health} здоровья`);
    }
};
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: function(hero) {
        hero.health -= 10;
        console.log(`${this.name} атакует ${hero.name}! У ${hero.name} осталось ${hero.health} здоровья`);
    }
};


function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        const randomNumber = getRandomNumberInRange(0, 1);
        if (randomNumber === 0) {
            heroPlayer.heatEnemy(enemyPlayer);
        } else {
            enemyPlayer.heatHero(heroPlayer);
        }
    }
    
    if (heroPlayer.health > 0) {
        alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
    } else {
        alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
    }
}
startGame(hero, enemy);