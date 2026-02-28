function giveTalonsInOrder(patients, orders) {
    const orderedPatients = [];
    
    for (let i = 0; i < orders.length; i++) {
        const currentId = orders[i];
        const patient = patients.find(p => p.id === currentId);
        
        orderedPatients.push(patient);
    }
    
    return orderedPatients;
}

const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" }
];

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);