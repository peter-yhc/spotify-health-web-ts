export function Account(firstname, surname, alias) {
  this.firstname = firstname;
  this.surname = surname;
  this.alias = alias;
}

const setAccountDetails = (account) => {
  localStorage.setItem('shw.account', JSON.stringify(account));
};

const getAccountDetails = () => {
  const details = JSON.parse(localStorage.getItem('shw.account'));
  return new Account(details.firstname, details.surname, details.alias);
};

export default {
  setAccountDetails,
  getAccountDetails,
};
