// encapsulation fourth pillar of OOP ==> using modifiers and capsulate the access procedure

class BankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

const userAccount = new BankAccount(11, "User Name", 20);
// userAccount.addBalance(200);
// userAccount.addBalance(80);
userAccount.callHiddenMethod(200);
userAccount.callHiddenMethod(80);
console.log(userAccount); // op:BankAccount { userId: 11, userName: 'User Name', userBalance: 300 }

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance; // can get the access by using protected modifiers
  }
}
