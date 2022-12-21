class Bank {
  name = '';
  accounts = [];

  constructor(name) {
    if (typeof name === 'string') {
      this.name = name;
    } else {
      throw 'Name must be a string';
    }
  }

  addAccount(account) {
    this.accounts.push(account);
  }
}
  
export default Bank;
  