import UserCache, { Account } from './user-cache';

describe('User Cache', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('can set account name', () => {
    const account = new Account('first', 'last', 'alias');
    UserCache.setAccountDetails(account);

    const cachedAccount = JSON.parse(localStorage.getItem('shw.account'));
    expect(cachedAccount.firstname).toBe('first');
    expect(cachedAccount.surname).toBe('last');
    expect(cachedAccount.alias).toBe('alias');
  });

  test('can retrieve cache', () => {
    const account = new Account('first', 'last', 'alias');
    localStorage.setItem('shw.account', JSON.stringify(account));

    const cachedAccount = UserCache.getAccountDetails();
    expect(cachedAccount.firstname).toBe('first');
    expect(cachedAccount.surname).toBe('last');
    expect(cachedAccount.alias).toBe('alias');
  });

  test('can retrieve undefined account details when cache is empty', () => {
    const cachedAccount = UserCache.getAccountDetails();
    expect(cachedAccount.firstname).toBe(undefined);
    expect(cachedAccount.surname).toBe(undefined);
    expect(cachedAccount.alias).toBe(undefined);
  });
});
