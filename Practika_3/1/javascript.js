function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

const getName3 = (name) => {
  return `Имя равно ${name}`;
};

console.log(getName1("Анна"));
console.log(getName2("Алёна"));
console.log(getName3("Анеглина"));
