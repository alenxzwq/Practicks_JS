function getKiller(suspectInfo, deadPeople) {
    for (const suspect in suspectInfo) {
        const peopleSeen = suspectInfo[suspect]; 
    
        const hasSeenAllDeadPeople = deadPeople.every(deadPerson => 
            peopleSeen.includes(deadPerson)
        );

        if (hasSeenAllDeadPeople) {
            return suspect;
        }
    }
    return 'Преступник не найден';
}

const killer1 = getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
);
console.log('Убийца:', killer1); 

const killer2 = getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
    },
    ['Ben', 'Kevin']
);
console.log('Убийца:', killer2); 

const killer3 = getKiller(
    {
        'Alex': ['John', 'Sarah', 'Mike'],
        'Bob': ['Sarah', 'Mike'],
        'Charlie': ['John', 'Sarah'],
    },
    ['John', 'Sarah', 'Mike']
);
console.log('Убийца:', killer3); 