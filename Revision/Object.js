const person1 = {
    name: "Ashfak",
    age: 22,
    isStudent: true,
    greeding: function(){console.log(`Hi! I'm Ashfak how are you?`)},
    eats: () => {console.log(`I love to eat Biryani!`)}
}

console.log(person1.name);
console.log(person1.age);
console.log(person1.isStudent);

person1.greeding();
person1.eats();

const person2 = {
    name: "Ahmath",
    age: 23,
    isStudent: true,
    greeding: function(){console.log(`Hi! I'm ${this.name} how are you?`)},
    eats: () => {console.log(`I love to eat Fried Rice!`)}
}

person2.greeding();

const person3 = {
    name: "Sahi",
    age: 22,
    isStudent: true,
    greeding: () => {console.log(`Hi! I'm ${this.name} how are you?`)},
    eats: () => {console.log(`I love to eat Chicken Sixty Five!`)}
}

person3.greeding(); // This doesn't work in arrow function