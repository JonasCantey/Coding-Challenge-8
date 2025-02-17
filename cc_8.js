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

//Task 4: Parameters and Arguments
console.log("Task 4: Parameters and Arguments")

function calculateRentalCost(days, carType, insurance = false) {    //declared a function that uses the parameters days, carType, and insurance
    let carTypeRates = {"Economy": 40, "Standard": 60, "Luxury": 100};  //stored the carTypeRates as objects.

    if (insurance === true) {       //used a conditional saying if insurance = true then rentalCost is rate + 20 * days
        rentalCost = ((carTypeRates[carType] + 20) * days).toFixed(2)
    } else {                        //if there is no insurance, do not add 20 to the rate.
        rentalCost = ((carTypeRates[carType]) * days).toFixed(2)
    }
    return `Total Rental Cost: $${rentalCost}`  //told the function what to return
}

console.log(calculateRentalCost(3, "Economy", true));
console.log(calculateRentalCost(5, "Luxury", false));

//Task 5: Returning Values
console.log("Task 5: Returning Values")

function calculateLoanPayment(principal, rate, time) {  //created a function that returns principal + (principal * rate * time
    return (principal + (principal * rate * time)).toFixed(2)   //added toFixed(2) to show decimals
}

console.log(`Total Payment: $${calculateLoanPayment(1000, 0.05, 2)}`);
console.log(`Total Payment: $${calculateLoanPayment(5000, 0.07, 3)}`);

//Task 6: Higher-Order Functions
console.log("Task 6: Higher-Order Functions")

let transactions = [200, 1500, 3200, 800, 2500] //declared array of test data
function filterHighValueTransactions(transactions, filterFunction) {    //made the higher order function which uses
    return transactions.filter(filterFunction);                     //the transactions array and a filterFunction yet to be defined
}

const result = filterHighValueTransactions(transactions, amount => amount > 1000)   //declare a variable result and call the function, then defined the filter function
console.log(result);    //console.logged the result variable

//Task 7: Closures
console.log("Task 7: Closures")

const createCartTracker = () => {    //created a function createCartTracker and declared
    let cart = 0                    //the starting cart as 0. Then made an addExpense
    const addExpense = (amount) => {        //function that took the total expense and added the amount
        cart += amount;             //I then had the updated total expense returned.
        return `Total Cart Value: $${cart}`
    };
        return addExpense;      //Returned the inner function
    };
    let tracker = createCartTracker();
    console.log(tracker(20));
    console.log(tracker(35));

    //Task 8: Recursion in JavaScript
    console.log("Task 8: Recursion in JavaScript")

                                                //recursive function to calculate revenue growth
function calculateSavings(years, amount) {
    if (years >= 10) {                      //base case: stop recursion when years reach 10
        return `Projected Savings: $${amount.toFixed(2)}`;
    }
            //Recursive case: increases revenue by 5% and decrement the years
    return calculateSavings(years + 1, amount * 1.05);
}

console.log(calculateSavings(8, 1000));
console.log(calculateSavings(5, 5000));