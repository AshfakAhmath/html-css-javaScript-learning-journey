let fruits = ["apple", "mango", "banana", "avocado", "pineapple"];
fruits.push("pineapple");
fruits.pop();
fruits.unshift("banana");
fruits.shift();


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("");

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}