import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
    const [addExpense, setAddExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        };
        props.onAddExpense(expenseData);
        setAddExpense((prevState) => !prevState);
    };

    const addExpenseHandler = (event) => {
        setAddExpense((prevState) => !prevState);
    };
    
    return (
        <div className="new-expense">
            {!addExpense && (
                <button onClick={addExpenseHandler}>Add New Expense</button>
            )}
            {addExpense && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={addExpenseHandler}
                />
            )}
        </div>
    );
}
export default NewExpense;
