import {Dispatch} from 'redux';
import storeExpense, {
  deleteExpense,
  getAllExpenses,
} from '../../managers/RealmManager';
import Expense from '../../models/Expense';
import {
  Add_EXPENSE,
  DELETE_EXPENSE,
  ExpenseActionType,
  INITIALIZE_EXPENSE,
} from './ExpenseActionsTypes';

export const initializeExpense =
  () => async (dispatch: Dispatch<ExpenseActionType>) => {
    getAllExpenses((expenses: Expense[]) => {
      dispatch({
        type: INITIALIZE_EXPENSE,
        value: expenses,
      });
    });
  };

export const addExpense =
  (expense: Expense, completion: (success: Boolean) => void) =>
  async (dispatch: Dispatch<ExpenseActionType>) => {
    storeExpense(expense, success => {
      if (success) {
        dispatch({
          type: Add_EXPENSE,
          value: expense,
        });
        completion(true);
      } else {
        completion(false);
      }
    });
  };

export const removeExpense =
  (expense: Expense) => async (dispatch: Dispatch<ExpenseActionType>) => {
    deleteExpense(expense.id);
    dispatch({
      type: DELETE_EXPENSE,
      value: expense,
    });
  };
