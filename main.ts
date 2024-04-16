import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 2004;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select your account type",
            type: "list",
            choices: [
                "Current Account",
                "Savings Account",
            ]
        },
        {
            name: "transMethod",
            message: 'Select your transaction method',
            type: "list",
            choices: [
                "Cash Withdrawal",
                "Fast Cash"
            ]
        }
    ]);

    if (atmQuestions.transMethod == "Cash Withdrawal") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);

        if (myBalance >= cashwithdrawAmount.withdraw) {
            myBalance -= cashwithdrawAmount.withdraw;
            console.log(`Your Total Balance is: $${myBalance}`);
        } else {
            console.log("Insufficient Balance");
        }
    } else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "3000",
                    "5000",
                ]
            }
        ]);

        if (myBalance >= fastCashAmount.fastCash) {
            myBalance -= fastCashAmount.fastCash;
            console.log(`Your Total Balance is: $${myBalance}`);
        } else {
            console.log("Insufficient Balance");
        }
    }
} else {
    console.log("Incorrect pin code!!!");
}

// Call the function to run the ATM program