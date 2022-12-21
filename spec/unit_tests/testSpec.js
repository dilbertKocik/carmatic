import Bank from "../../lib/Bank.js";
import SavingsAccount from "../../lib/accounts/savingsAccount.js";
import IndividualAccount from "../../lib/accounts/individualAccount.js";

describe('Bank tests', function() {
  let bank;
  let savingsAccount;
  let individualAccount;
  beforeEach(function() {
    bank = new Bank('The Vault');
    savingsAccount = new SavingsAccount('Mr. Moneybags');
    individualAccount = new IndividualAccount('Mrs. Moneybags');
    bank.addAccount(savingsAccount);
    bank.addAccount(individualAccount);
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

  it('should allow you to transfer funds between accounts', function() {
    const depositAmount = 50000;
    const transferAmount = 2000;
    const expectedBalance = depositAmount - transferAmount;
    savingsAccount.deposit(depositAmount);
    savingsAccount.transfer(transferAmount, individualAccount);
    expect(savingsAccount.balance).toEqual(expectedBalance);
    expect(individualAccount.balance).toEqual(transferAmount);
  });
});
  