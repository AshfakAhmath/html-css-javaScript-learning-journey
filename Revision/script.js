let hourRate = window.prompt("Enter the hourly rate: ");
let noHours = window.prompt("Enter the no of hours worked on that project: ");
let cost = window.prompt("Enter the cost: ");

hourRate = Number(hourRate);
noHours = Number(noHours);
cost  = Number(cost);

let grossEarnings = hourRate * noHours;
let netIncome = grossEarnings - cost;
let taxEstimate = netIncome * 0.15;
let finalPay = netIncome - taxEstimate;

console.log(`Gross Earning: ${grossEarnings}`);
console.log(`Net earning: ${netIncome}`);
console.log(`Tax Estimate: ${taxEstimate}`);
console.log(`Final Take-Home pay: ${finalPay}`);