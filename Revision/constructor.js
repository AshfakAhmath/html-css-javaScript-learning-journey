function Person(firstName, lastName, age, isStudent){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.isStudent = isStudent,
    this.greeting = function(){console.log(`Hi! I'm ${this.firstName} ${this.lastName}. How are you?`)}
}

const person1 = new Person("Ashfak", "Ahmath", 22, true);
const person2 = new Person("Aslam", "Sahi", 22, false);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isStudent);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isStudent);

person1.greeting();
person2.greeting();