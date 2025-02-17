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

//Task 3: Arrow Function
console.log("Task 3: Arrow Function")

const calculateServiceFee = (amount, serviceType) => {  //Declaring the arrow function
    let serviceFee;             //declaring a variable to be determined by tier of service

    if (serviceType === "Premium") {    //if service type = Premium, service fee is amount * 0.15
       serviceFee = amount * 0.15
    } else if (serviceType === "Standard") {    //if service type = standard, service fee is amount * 0.1
       serviceFee = amount * 0.1 
    } else if (serviceType === "Basic") {       //if service type = basic, service fee is amount * 0.05
       serviceFee = amount * 0.05
    } else {
        return `Error: Incorrect service tier reported!` //if service type is anything else an error will be thrown
    }

    return `Service Fee: $${serviceFee.toFixed(2)}` //returned service fee toFixed(2) to show decimal places
}

console.log(calculateServiceFee(200, "Premium"));
console.log(calculateServiceFee(500, "Standard"));