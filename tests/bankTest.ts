import Bank from "../src/bank";

const bnk = new Bank();

console.log(`----Story #1 Tests----`);

// Scenario 1: A successful account creation
const account = bnk.createAccount("John Doe", 29, "1776");
if (account.accountNumber === "1776") {
  console.log("Scenario 1 passed!");
}

// Scenario 2: A failure to create an account due to the account already existing
try {
  bnk.createAccount("John Doe", 29, "1776");
  console.log("Scenario 2 failed!");
} catch {
  console.log("Scenario 2 passed!");
}

console.log(`----------------------`);
console.log(`----Story #2 Tests----`);

// Scenario 1: A successful deposit
const balance = bnk.depositFunds("1776", 2000);
if (balance === 2000) {
  console.log("Scenario 1 passed!");
}

// Scenario 2: A failed deposit due to the account not existing
try {
  bnk.depositFunds("1999", 1200);
  console.log("Scenario 2 failed!");
} catch {
  console.log("Scenario 2 passed!");
}

console.log(`----------------------`);
console.log(`----Story #3 Tests----`);

// Scenario 1: A successful withdrawal
const newAccount = bnk.createAccount("Super Mario", 55, "1337");
bnk.depositFunds("1337", 10000);
const newBalance = bnk.withdrawFunds("1337", 5000);

if (newBalance === 5000) {
  console.log("Scenario 1 passed!")
} else {
  console.log("Scenario 1 failed!");
}

// Scenario 2: A failed withdrawal (Account does not exist)
try {
  bnk.withdrawFunds("1999", 3000);
  console.log("Scenario 2 failed!")
} catch {
  console.log("Scenario 2 passed!");
}

// Scenario 3: A failed withdrawal (Not enough funds)
try {
  bnk.withdrawFunds("1337", 6000);
  console.log("Scenario 3 failed!");
} catch {
  console.log("Scenario 3 passed!");
}


