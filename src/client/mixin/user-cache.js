export function Account(firstname, surname, alias, id) {
  this.firstname = firstname;
  this.surname = surname;
  this.alias = alias;
  this.id = id;

  this.getUsername = function getUsername() {
    return firstname && surname
      ? `${firstname} ${surname}`
      : alias;
  };
}

const setAccountDetails = (account) => {
  localStorage.setItem('shw.account', JSON.stringify(account));
};

const getAccountDetails = () => {
  const details = JSON.parse(localStorage.getItem('shw.account'));
  return new Account(
    details && details.firstname ? details.firstname : undefined,
    details && details.surname ? details.surname : undefined,
    details && details.alias ? details.alias : undefined,
    details && details.id ? details.id : undefined,
  );
};

export default {
  setAccountDetails,
  getAccountDetails,
};
