//Task 1: Function Declaration
console.log("Task 1: Function Declaration")

function calculateSalary(baseSalary, bonus, taxRate) {  //declared function that takes salary + bonus and subtracts
    return ((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2)   //the tax on the salary. The bonus is non-taxable. Corporate America am I right?
}

console.log(`Net Salary: $${calculateSalary(5000,500,0.1)}`)
console.log(`Net Salary: $${calculateSalary(7000,1000,0.15)}`)

//Task 2: Function Expression
console.log("Task 2: Function Expression")

function calculateDiscount(price, discountRate) {   //declared function calculateDiscount that takes price and 
    return (price - (price * discountRate)).toFixed(2)  //subtracts the price * discountRate (the discount)
}                                                       //added .toFixed(2) to show decimal places

console.log(`Final Price: $${calculateDiscount(100,0.02)}`)
console.log(`Final Price: $${calculateDiscount(250,0.15)}`)