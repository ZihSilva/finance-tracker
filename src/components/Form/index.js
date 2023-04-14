import React, {useState} from 'react'
import * as C from "./styles";
import Grid from "../Grid/index";

 const Form = ({handleAdd, transactionList, setTransactionList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);
 
const generateId = () => Math.round(Math.random() * 1000);
    
    const handleSave = ( ) => {
        if (!desc || !amount){
            alert("Add the expense to your account");
            return;     
        } else if(amount < 1) {
            alert("The amount must be positive");
            return;
    }

    const transaction = {
        id: generateId(),
        desc: desc,
        amount: amount,
        expense: isExpense,
    }
 
    return (
<>
<C.Container>
    <C.InputContent>
        <C.Label>Description</C.Label>    
        <C.Input value={desc} onChange = {(e) => setDesc (e.target.value)} />
        </C.InputContent>
    <C.InputContent>
        <C.Label>Amount</C.Label>
   <C.Input
   value={amount}
   type="number"
   onChange = {(e) => setAmount(e.target.value)}
    />
    </C.InputContent>
    <C.RadioGroup>
<C.Input 
type="radio"
id = "rIncome"
defaultChecked
name="group1"
onChange={() => setIsExpense(!isExpense)}
/>
<C.Label htmlFor ="rIncome">Entrada</C.Label>
<C.Input 
type="radio"
id = "rExpense"
name="group1"
onChange={() => setIsExpense(!isExpense)}
/>
<C.Label htmlFor ="rIncome">Saída</C.Label>
    </C.RadioGroup>
    <C.Button onClick={handleSave}>Add Expense</C.Button>
</C.Container>
<Grid items={transactionList} setItems={setTransactionList}/>
</>  
    )
    };
};

export default Form;


