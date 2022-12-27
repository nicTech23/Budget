import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const budjectContext = createContext(null);

export const BudjectProvider = ({children})=>{

    const [forInc, setForInc] = useState("+")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    const [count, setCount] = useState(0)
   

     /*Setting the value of Value1 which is to determ if 
        it is income or Expenduture i.e onChange
    */
    
    const ForIncome = (e)=>{
        setForInc(e.target.value)
       
    }

    /*Setting the value of Value 2 which is the Item Description
        i.e onChange
    */
    const Value2Change = (e)=>{
        setValue2(e.target.value)
    }


     /*Setting the value of Value3 which is the Item Amount
        i.e onChange
    */
    const Value3Change = (e)=>{
        setValue3(e.target.value)
       
    }

     /*Deleting item from the Income array
        i.e onClick
    */
    const IcDelete = (id)=> {
        setIncome(income.filter(item => item.id !== id))
    };

     /*Deleting item from the Expense array
        i.e onClick
    */
    const ExDelete = (id)=> {
        setExpense(expense.filter(item => item.id !== id))
    };

    
     /*Pushing Items into the Expense or inCome array
        i.e onClick
    */
    const AddClick1=()=>{
        setCount(count+1)

        if(forInc === "+" && value2 !== '' && value3 !== ''){
            setIncome([...income, {id:count, description:value2, amount:value3}])
        }
        if(forInc === "-" && value2 !== '' && value3 !== ''){
              setExpense([...expense, {id:count, description:value2, amount:value3}])
        }
       
    }

    return(
        <budjectContext.Provider value={{forInc,  value2, value3, Value2Change, Value3Change, ForIncome, AddClick1,income, expense, IcDelete, ExDelete }}>
                {children}
        </budjectContext.Provider>
    )
}