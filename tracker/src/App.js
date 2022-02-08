import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES=[
    { id:'e1', title:'toilet paper', amount:94.12, date: new Date(2020,7,14)},
    { id:'e2', title:'new tv', amount:799.49, date: new Date(2021,2,12)},
    { id:'e3', title:'car insurance', amount:294.66, date: new Date(2020,4,28),},
    { id:'e4', title:'insurance', amount:24.6, date: new Date(2022,9,20),},
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return([expense, ...prevExpenses]);
        });
    };
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
