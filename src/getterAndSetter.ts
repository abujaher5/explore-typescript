// getter and setter

class BankAccount {
  readonly userId: number;
  public userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  // balance set function
  addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }

  // balance get function
  getBalance() {
    return this.userBalance;
  }
}

const userAccount = new BankAccount(11, "User Name", 50);
userAccount.addBalance(100);
userAccount.addBalance(200);
// console.log(userAccount.getBalance()); // op: 350
// for getting and setting this balance need to call the function =>> adBalance() and getBalance()

class BankAccount1 {
  readonly userId: number;
  public userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  // using setter
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  // using getter
  get getBalance() {
    return this.userBalance;
  }
}

const userAccount1 = new BankAccount1(11, "User Name", 50);

userAccount1.addBalance = 100;
userAccount1.addBalance = 200;
userAccount1.getBalance; // op: 350
// console.log(userAccount1.getBalance); // op: 350
// here don't need to call the function
