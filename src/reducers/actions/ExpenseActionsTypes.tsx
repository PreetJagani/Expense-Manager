import Expense from '../../models/Expense';

export const INITIALIZE_EXPENSE = 'Initialize_Expense';
export const Add_EXPENSE = 'Add_Expense';
export const DELETE_EXPENSE = 'Delete_Expense';
export const UPDATE_EXPENSE = 'Update_Expense';

export type INITIALIZE_EXPENSE_ACTION_TYPE = {
  type: typeof INITIALIZE_EXPENSE;
  value: Expense[];
};

export type ADD_EXPENSE_ACTION_TYPE = {
  type: typeof Add_EXPENSE;
  value: Expense;
};

export type DELETE_EXPENSE_ACTION_TYPE = {
  type: typeof DELETE_EXPENSE;
  value: Expense;
};

export type UPDATE_EXPENSE_ACTION_TYPE = {
  type: typeof UPDATE_EXPENSE;
  value: Expense;
};

export type ExpenseActionType =
  | INITIALIZE_EXPENSE_ACTION_TYPE
  | ADD_EXPENSE_ACTION_TYPE
  | DELETE_EXPENSE_ACTION_TYPE
  | UPDATE_EXPENSE_ACTION_TYPE;
