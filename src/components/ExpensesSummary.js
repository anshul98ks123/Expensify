import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenCount }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const expenseWord2 = hiddenCount === 1 ? 'expense' : 'expenses';  
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
          { 
            hiddenCount!=0 
              ? <div className="hidden-msg">{hiddenCount} {expenseWord2} &rarr; hidden due to filters</div>
              : <div className="hidden-msg">No hidden expenses</div>  
          }
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>  
        </h1>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const hiddenExpenses = state.expenses.length - visibleExpenses.length;
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenCount: hiddenExpenses
  }
};

export default connect(mapStateToProps)(ExpensesSummary);