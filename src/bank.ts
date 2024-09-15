// Indicates the type for all bank accounts in the bank
interface BankAccount {
  name: String;
  age: number;
  accountNumber: String;
  balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {

  // Array to store all bank accounts
  private accounts: BankAccount[] = [];

  /**
   *  Creates a new account with the provide input unless that account already exists
   * @param name --- name of the customer
   * @param age  --- age of the customer
   * @param accountNumber --- account number of the customer
   */
  public createAccount(name: String, age: number, accountNumber: string) {
    const isAccountExists = this.findAccount(accountNumber);
    if (isAccountExists) {
      throw new Error("Account already exists");
    } else {
      const account: BankAccount = {
        name,
        age,
        accountNumber,
        balance: 0
      }
      this.accounts.push(account);
      return account;
    }
  }

  /**
   * Searches for an existing account in the Bank using provided account number
   * @param accountNumber the account number to search for in accounts
   * @returns A bank account or nothing
   */
  private findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(account => account.accountNumber === accountNumber)
  }

  /**
   *  Deposits funds into a bank account if it exists within the system
   * @param accountNumber the account number of the user's account
   * @param funds the funds to deposit
   * @returns the new balance of the account, or nothing if the deposit fails
   */
  public depositFunds(accountNumber: string, funds: number): number | void {
    const isAccountExists = this.findAccount(accountNumber);
    if (!isAccountExists) {
      throw new Error("Account does not exist in the system...");
    }

    isAccountExists.balance += funds;
    return isAccountExists.balance;
  }

  /**
   * Withdraws funds from a bank account if it exists within the system
   * @param accountNumber the account number of the users account
   * @param funds the funds to withdraw from the account
   * @returns the new balance of the account
   */
  public withdrawFunds(accountNumber: string, funds: number) {
    const account = this.findAccount(accountNumber);
    if (!account) {
      throw new Error("Account does not exists in the system...");
    }

    if (account.balance >= funds) {
      account.balance -= funds
      return account.balance
    } else {
      throw new Error("Account does not have enough funds to withdraw the requested amount...");
    }
  }

}