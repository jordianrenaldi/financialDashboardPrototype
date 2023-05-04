import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: parseFloat(amount),
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title </label>
                <input
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label> Amount </label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler}
                    value={amount}
                />
            </div>
            <div className="new-expense__control">
                <label> Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max={new Date()}
                    onChange={dateChangeHandler}
                    value={date}
                />
            </div>
        </div>
        <div className="new-expenses__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expenses</button>
        </div>
    </form>
    );
}

export default ExpenseForm;
