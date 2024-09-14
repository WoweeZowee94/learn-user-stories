import Bank from "../src/bank";

const bnk = new Bank();

console.log(`----Story #1 Tests----`)

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

console.log(`----------------------`)
console.log(`----Story #2 Tests----`)

// Scenario 1: A successful deposit
const balance = bnk.depositFunds("1776", 2000);
if (balance === 2000) {
  console.log("Scenario 1 passed!");
}

try {
  bnk.depositFunds("1999", 1200);
  console.log("Scenario 2 failed!");
} catch {
  console.log("Scenario 2 passed!");
}

console.log(`----------------------`);