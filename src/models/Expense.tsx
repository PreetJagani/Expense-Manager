// todo change expense to transaction

export interface RealmExpense {
  id: string;
  name: string;
  des: string;
  amount: number;
  date : number;
}

export const EXPENSE_DB_NAME: string = 'Expense';

export default class Expense implements RealmExpense {
  name: string;
  amount: number;
  des: string;
  id: string;
  date : number;

  constructor(name: string, amount: number, des: string, date : number) {
    this.name = name;
    this.amount = amount;
    this.des = des;
    this.id = Math.random().toString();
    this.date = date;
  }

  toRealmExpense() {
    const ret: RealmExpense = {
      id: this.id,
      name: this.name,
      des: this.des,
      amount: this.amount,
      date : this.date,
    };
    return ret;
  }
}

export function realmExpenseToExpense(expenseData: RealmExpense): Expense {
  const expense: Expense = new Expense(
    expenseData.name,
    expenseData.amount,
    expenseData.des,
    expenseData.date,
  );
  expense.id = expenseData.id;
  return expense;
}

// export function realmExpensesToExpense(
//   expensesData: Array<RealmExpense>,
// ): Array<Expense> {
//   const expenses: Array<Expense> = [];
//   expensesData.map(expense => {
//     expenses.push(realmExpenseToExpense(expense));
//   });
//   return expenses;
// }

export const RealmExpenseSchema = {
  name: EXPENSE_DB_NAME,
  properties: {
    id: 'string',
    name: 'string',
    des: 'string?',
    amount: 'int?',
    date : 'int',
  },
  primaryKey: 'id',
};
