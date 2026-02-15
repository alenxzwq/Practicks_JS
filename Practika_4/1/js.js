const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(queue) {
    if (queue.length === 0) return; 
    
    const client = queue.shift(); 
    alert(`${client} получил(a) посылку. В очереди осталось ${queue.length} человек.`);
}

function leaveQueueWithoutParcel(queue) {
    if (queue.length === 0) return; 
    
    const client = queue.pop(); 
    alert(`${client} не получил(a) посылку и ушел(ла) из очереди`);
}

giveParcel(peopleWaiting); 
giveParcel(peopleWaiting); 

giveParcel(peopleWaiting); 

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel(peopleWaiting);
}