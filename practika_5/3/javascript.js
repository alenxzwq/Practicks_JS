function handleObject(obj, key, action) {
    const newObj = { ...obj };
    
    if (action === 'get') {
        return newObj[key];
    } else if (action === 'add') {
        newObj[key] = '';
        return newObj;
    } else if (action === 'delete') {
        delete newObj[key];
        return newObj;
    } else {
        return newObj;
    }
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript'
};

const result1 = handleObject(student, 'programmingLanguage', 'delete');
console.log('result delete:', result1);

const result2 = handleObject(student, 'name', 'get');
console.log('result get:', result2);

const result3 = handleObject(student, 'age', 'add');
console.log('result add:', result3);

const result4 = handleObject(student, 'anything', 'unknown');
console.log('result unknown:', result4);

console.log('original student:', student);