#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a Welcome Message
console.log("\n\tWelcome To '\CodeWithSaba\ -Simpleminicaculator\n");
// Asking question from user through inquirer
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform operations.",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement If-Else
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Input");
}
;
