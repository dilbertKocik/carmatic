class Account {
  owner = '';
  balance = 0;
  accountType;

  constructor(owner) {
    if (typeof owner === 'string') {
      this.owner = owner;
    } else {
      throw 'Owner must be a string';
    }
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    if (amount < this.balance) {
      this.balance = this.balance - amount;
    } else {
      throw 'Insufficient funds';
    }
  }

  transfer(amount, toAccount) {
    try {
      this.withdraw(amount);
      toAccount.deposit(amount);
    } catch (ex) {
      console.error('Transfer failed', amount, this.owner, toAccount.owner, new DateTime())
      throw 'Transfer failed';
    }
  }
}
  
export default Account;