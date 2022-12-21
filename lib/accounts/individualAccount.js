import CheckingAccount from './checkingAccount.js';

class IndividualAccount extends CheckingAccount {
  checkingAccountType = 'Individual';

  withdraw(amount) {
    if (amount <= 1000) {
      super(amount);
    } else {
      throw 'amount exceeds withdrawal limit of $1000';
    }
  }
}

export default IndividualAccount;