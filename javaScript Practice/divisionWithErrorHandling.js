try{
    const dividend = Number(window.prompt("Enter the dividend: "));
    const divisor = Number(window.prompt("Enter the divisor: "));

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Value must be number");
    }

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log(`Program is running!`);