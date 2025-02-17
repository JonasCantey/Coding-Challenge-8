//Task 1
console.log("Task 1")

function calculateSalary(baseSalary, bonus, taxRate) {  //declared function that takes salary + bonus and subtracts
    return ((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2)   //the tax on the salary. The bonus is non-taxable. Corporate America am I right?
}

console.log(`Net Salary: $${calculateSalary(5000,500,0.1)}`)
console.log(`Net Salary: $${calculateSalary(7000,1000,0.15)}`)