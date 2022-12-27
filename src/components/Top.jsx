import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import {budjectContext} from "../components/Context"

    

const MainBox = styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"Center", 
    height:"300px",
    backgroundColor:"lightblue",
})

const ExBox = styled(Box)({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"Center",
    width: "300px",
    backgroundColor:"red",
    padding:"10px",
    marginTop:"10px"
})

const InBox = styled(Box)({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"Center",
    width: "300px",
    backgroundColor:"green",
    padding:"10px",
    marginTop:"10px"
})

const Top = () => {
   {/* Inporting values from the Context Component */}
  const {income, expense} = useContext(budjectContext)

   {/* Addind the amount of Expenditure */}
  let Expenditure = expense.reduce((acc, item)=>{
    return acc + parseInt(item.amount)
  }, 0)

  {/* Addind the amount of Income */}
  let Income = income.reduce((acc, item)=>{
    return acc + parseInt(item.amount)
  }, 0)

  return (
    <MainBox>
      <Box mt="10px">Available budjet for September</Box>
      <Box mt="10px">{Income - Expenditure}</Box>
      <ExBox>
        <Typography>Expense</Typography>
        <Typography>- {Expenditure}</Typography>
      </ExBox>
      <InBox>
        <Typography>Income</Typography>
        <Typography>+ {Income}</Typography>
      </InBox>
    </MainBox>
  )
}

export default Top