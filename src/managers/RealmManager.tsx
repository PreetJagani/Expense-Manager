import {types} from '@babel/core';
import React from 'react';
import {View, Text} from 'react-native';
import Realm from 'realm';
import Expense, {
  RealmExpenseSchema,
  EXPENSE_DB_NAME,
  RealmExpense,
  realmExpenseToExpense,
} from '../models/Expense';

const REALM_DB_PATH: string = 'expenseDB';
const defaultCompletionBlock = () => {};

export function storeExpense(
  expense: Expense,
  completionBlock: (success: Boolean) => any = defaultCompletionBlock,
) {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        realm.create(EXPENSE_DB_NAME, expense.toRealmExpense());
        completionBlock(true);
      });
    } catch (e) {
      completionBlock(false);
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

export function getAllExpenses(
  completionBlock: (expenses: Array<Expense>) => any,
) {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        const realmExpenses: Realm.Results<RealmExpense> =
          realm.objects(EXPENSE_DB_NAME);
        const expenses: Array<Expense> = [];
        realmExpenses.map(expense => {
          expenses.push(realmExpenseToExpense(expense));
        });
        completionBlock(expenses);
      });
    } catch (e) {
      completionBlock([]);
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

export function deleteExpense(
  expenseId: string,
  completionBlock: (success: Boolean) => any = defaultCompletionBlock,
) {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        const realmObject = realm.objectForPrimaryKey(
          EXPENSE_DB_NAME,
          expenseId,
        );
        realm.delete(realmObject);
      });
    } catch (e) {
      completionBlock(false);
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

//todo delete batch, add in batch

export function purge() {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        realm.deleteAll();
      });
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

export function updateExpense(
  expense: Expense,
  completionBlock: (success: Boolean) => any = defaultCompletionBlock,
) {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        realm.create(
          EXPENSE_DB_NAME,
          expense.toRealmExpense(),
          Realm.UpdateMode.Modified,
        );
        completionBlock(true);
      });
    } catch (e) {
      completionBlock(false);
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

export const EXPENSE_TODAY = 'Today';
export const EXPENSE_WEEK = 'Week';
export const EXPENSE_MONTH = 'Month';
export const EXPENSE_YEAR = 'Year';

export type EXPENSE_TAG_TYPE =
  | typeof EXPENSE_TODAY
  | typeof EXPENSE_WEEK
  | typeof EXPENSE_MONTH
  | typeof EXPENSE_YEAR;

export function getAllExpensesForTag(
  tag: EXPENSE_TAG_TYPE,
  completionBlock: (expenses: Array<Expense>) => any,
) {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        const realmExpenses: Realm.Results<RealmExpense> =
          realm.objects(EXPENSE_DB_NAME);
        const filtered = realmExpenses.filtered(getFilterForTag(tag));
        const expenses: Array<Expense> = [];
        filtered.map(expense => {
          expenses.push(realmExpenseToExpense(expense));
        });
        completionBlock(expenses);
      });
    } catch (e) {
      completionBlock([]);
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

function getFilterForTag(tag: EXPENSE_TAG_TYPE) {
  switch (tag) {
    case EXPENSE_TODAY: {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      return getFilterForGreater('date', date.valueOf());
    }
    case EXPENSE_WEEK: {
      const curr = new Date();
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      // assuming start of day is monday :)
      return getFilterForRange(
        'date',
        date.valueOf() - (date.getDay() == 0 ? 6 : (date.getDay() - 1)) * 24 * 60 * 60 * 1000,
        curr.valueOf(),
      );
    }
    case EXPENSE_MONTH: {
      const curr = new Date();
      const date = new Date();
      date.setMonth(date.getMonth(), 1);
      date.setHours(0, 0, 0, 0);
      return getFilterForRange('date', date.valueOf(), curr.valueOf());
    }
    case EXPENSE_YEAR: {
      const curr = new Date();
      const date = new Date();
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
      return getFilterForRange('date', date.valueOf(), curr.valueOf());
    }
  }
}

function getFilterForGreater(field: string, value: number) {
  return `${field} > ${value}`;
}

function getFilterForRange(field: string, start: number, end: number) {
  return `${field} > ${start} AND ${field} < ${end}`;
}

export function storeDummyExpense() {
  withExpenseRealm(realm => {
    try {
      realm.write(() => {
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'aaa',
          des: 'aaa',
          amount: 1,
          date: Date.now(),
        });
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'bbb',
          des: 'bbb',
          amount: 2,
          date: Date.now() + 60 * 60 * 1000,
        });
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'ccc',
          des: 'ccc',
          amount: 3,
          date: Date.now() + 2 * 60 * 60 * 1000,
        });
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'ddd',
          des: 'ddd',
          amount: 4,
          date: Date.now() - 60 * 60 * 1000,
        });

        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'eee',
          des: 'eee',
          amount: 5,
          date: Date.now() - 24 * 60 * 60 * 1000,
        });
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'fff',
          des: 'fff',
          amount: 6,
          date: Date.now() - 25 * 60 * 60 * 1000,
        });
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'ggg',
          des: 'ggg',
          amount: 7,
          date: Date.now() - 23 * 60 * 60 * 1000,
        });
        realm.create(EXPENSE_DB_NAME, {
          id: String(Math.random()),
          name: 'hhh',
          des: 'hhh',
          amount: 8,
          date: Date.now() - 22 * 60 * 60 * 1000,
        });
      });
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  });
}

function withExpenseRealm(taskBlock: (realm: Realm) => any) {
  Realm.open({
    path: REALM_DB_PATH,
    schema: [RealmExpenseSchema],
  }).then(realm => {
    taskBlock(realm);
  });
}

export default storeExpense;
