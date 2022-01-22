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

function withExpenseRealm(taskBlock: (realm: Realm) => any) {
  Realm.open({
    path: REALM_DB_PATH,
    schema: [RealmExpenseSchema],
  }).then(realm => {
    taskBlock(realm);
  });
}

export default storeExpense;
