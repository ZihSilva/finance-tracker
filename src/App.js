import React, {useEffect, useState} from "react";  
import Global from "./styles/global";
import Header from "./components/Header/index";
import Resume from "./components/Resume/index";
import Form from "./components/Form/index";
 
const App = () => {
    const data = localStorage.getItem("transactions");
    const [transactionList, setTransactionList] = useState(
        data ? JSON.parse(data) : [ ]
    ); 
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
    
useEffect(() => {
    const amountExpense = transactionList
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amount));
    
    const amountIncome = transactionList
    .filter((item) => !item.expense)
    .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ $(income)`);
    setExpense(` R$ $(expense)`);
    setTotal(`$Number(income) < Number(expense) ? "-" : ") R$ ${total}`);
}, [transactionList]);

const handleAdd = (transaction) => {
    const newArrayTransactions = [... transactionList, transaction];
setTransactionList(newArrayTransactions);

localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

}
    return (
        <>
        <Header/>
        <Resume income={income} expense={expense} total={total}/>
        <Form handleAdd ={handleAdd} transitionList = {transactionList} setTransactionList = {setTransactionList}/>
        <Global/>
        
        </>
    )
}

export default App;

