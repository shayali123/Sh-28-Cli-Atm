import inquirer from "inquirer";
let totalbalance = 10000;
var pin = 1234;
const pinna = await inquirer.prompt([
    {
        name: "Password",
        type: "number",
        message: "Enter your Password ",
    }
]);
if (pinna.Password == pin) {
    console.log("correct password");
}
let operation = await inquirer.prompt([
    {
        name: "action",
        type: "list",
        message: "Please select option",
        choices: ["Check Balance", "withdraw"]
    }
]);
if (operation.action === "withdraw") {
    var Amount = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "enter your amount"
        }]);
    totalbalance -= Amount.amount;
    console.log("your remaining balance is :" + totalbalance);
}
else if (operation.action === "Check Balance") {
    console.log("your balance is :" + totalbalance);
}
else {
    console.log("wrong password");
}
