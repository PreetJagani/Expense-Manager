import Expense from '../models/Expense';
import { ExpenseActionType } from './actions/ExpenseActionsTypes';
import { INITIALIZE_EXPENSE, Add_EXPENSE, DELETE_EXPENSE } from './actions/ExpenseActionsTypes';

const initialState: stateStruct = {
  expenses: [],
};

function expenseReducer(state = initialState, action: ExpenseActionType) {
  const newState: stateStruct = {...state};

  switch (action.type) {
    case INITIALIZE_EXPENSE:
      const expenses: Array<Expense> = [];
      action.value.forEach((ex) => {
        expenses.push(ex);
      });
      newState.expenses = expenses;
      break;
    case Add_EXPENSE:
      const exp : Expense[] = [];
      state.expenses.map(ex => {
        exp.push(ex);
      });
      exp.push(action.value);
      newState.expenses = exp;
      break;
    case DELETE_EXPENSE: 
      const tmp : Expense[] = [];
      state.expenses.map(ex => {
        if (action.value.id != ex.id) {
          tmp.push(ex);
        }
      });
      newState.expenses = tmp;
      break;
  }
  return newState;
}

export type stateStruct = {
  expenses: Array<Expense>;
};

export default expenseReducer;
