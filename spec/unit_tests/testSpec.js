import Bank from "../../lib/Bank.js";
import SavingsAccount from "../../lib/accounts/savingsAccount.js";

describe('Bank tests', function() {
  let bank;
  let savingsAccount;
  beforeEach(function() {
    bank = new Bank('The Vault');
    savingsAccount = new SavingsAccount('Mr. Moneybags');
    bank.addAccount(savingsAccount);
    bank.addAccount(savingsAccount);
  });

  it('should allow you to deposit to the savings account', function() {
    const depositAmount = 50000;
    expect(savingsAccount.balance).toEqual(0);
    savingsAccount.deposit(depositAmount);
    expect(savingsAccount.balance).toEqual(depositAmount);
  });

  it('should allow you to withdraw', function() {
    const depositAmount = 50000;
    const withdrawalAmount = 5000;
    const expectedBalance = depositAmount - withdrawalAmount;
    savingsAccount.deposit(depositAmount);
    savingsAccount.withdraw(withdrawalAmount)
    expect(savingsAccount.balance).toEqual(expectedBalance);
  });
});
  