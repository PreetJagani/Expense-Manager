import {Dispatch} from 'redux';

import * as RealmManager from '../../managers/RealmManager';
import Expense from '../../models/Expense';
import {
  Add_EXPENSE,
  DELETE_EXPENSE,
  ExpenseActionType,
  INITIALIZE_EXPENSE,
  UPDATE_EXPENSE,
} from './ExpenseActionsTypes';

export const initializeExpense =
  () => async (dispatch: Dispatch<ExpenseActionType>) => {
    RealmManager.getAllExpenses((expenses: Expense[]) => {
      dispatch({
        type: INITIALIZE_EXPENSE,
        value: expenses,
      });
    });
  };

export const getExpenseForTag =
  (tag: RealmManager.EXPENSE_TAG_TYPE) =>
  async (dispatch: Dispatch<ExpenseActionType>) => {
    RealmManager.getAllExpensesForTag(tag, (expenses: Expense[]) => {
      dispatch({
        type: INITIALIZE_EXPENSE,
        value: expenses,
      });
    });
  };

export const addExpense =
  (expense: Expense) => async (dispatch: Dispatch<ExpenseActionType>) => {
    dispatch({
      type: Add_EXPENSE,
      value: expense,
    });
    RealmManager.storeExpense(expense, success => {
      if (!success) {
        dispatch({
          type: DELETE_EXPENSE,
          value: expense,
        });
      }
    });
  };

export const deleteExpense =
  (expense: Expense) => async (dispatch: Dispatch<ExpenseActionType>) => {
    dispatch({
      type: DELETE_EXPENSE,
      value: expense,
    });
    RealmManager.deleteExpense(expense.id, success => {
      if (!success) {
        dispatch({
          type: Add_EXPENSE,
          value: expense,
        });
      }
    });
  };

export const updateExpense =
  (oldExpense: Expense, newExpense: Expense) => (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_EXPENSE,
      value: newExpense,
    });
    RealmManager.updateExpense(newExpense, success => {
      if (!success) {
        dispatch({
          type: UPDATE_EXPENSE,
          value: oldExpense,
        });
      }
    });
  };
