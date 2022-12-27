import { Box, Button, Chip, Grid, Select, TextField, Typography } from '@mui/material'
import { style, styled } from '@mui/system'
import React, { useContext } from 'react'
import {budjectContext} from "../components/Context"
import AddIcon from '@mui/icons-material/Add';
import DeletIcon from '@mui/icons-material/Delete';

const InputBox = styled(Box)({
    display: 'flex',
    padding:"10px",
    border:"1px solid transparent",
    backgroundColor:"white",
    marginTop: "10px",
    borderRadius: "10px"
    
})

const MainBox = styled(Box)({
    display: 'flex',
    flexDirection:"column",
    alignItems:"center"
})

const DisplayBox = styled(Box)({
    display:"flex",
    backgroundColor:"white",
    marginTop: "20px"
})



const Down = () => {
   
    /*Importing The Functions and from the Context componet*/
    const { value2, value3, Value2Change, Value3Change, 
           ForIncome, AddClick1, income, expense, IcDelete, ExDelete} = useContext(budjectContext)

        
  return (
    <MainBox sx={{backgroundColor:"gray", height: "60vh" }}>
        <InputBox>
            <Box backgroundColor="white" p="5px" border="1px solid gray">
                <select  onChange={ForIncome} style={{outline:"none", border:"none"}}>
                    <option>+</option>
                    <option>-</option>
                </select>
            </Box>
            <Box backgroundColor="white" p="5px" border="1px solid gray">
                <input  onChange={Value2Change} value={value2} type="text" placeholder='Item description' style={{outline:"none", border:"none", width:"300px"}}/>
            </Box>
            <Box backgroundColor="white" p="5px" border="1px solid gray">
                <input onChange={Value3Change} value={value3} type="number" placeholder='Amount' style={{outline:"none", border:"none", width:"200px"}}/>
            </Box>
            <Chip
                label="ADD"
                onClick={AddClick1}
                onDelete={AddClick1}
                deleteIcon={<AddIcon/>}
                variant="contained"
                />
        </InputBox>

        <DisplayBox>
            <Box sx={{width:"350px", border:"1px solid gray", padding:"10px 20px 10px 20px",color:"red"}}>
                <Typography variant='h6' >Income</Typography>

                {/* Income will replace by map */}
                {/* Renduring the Income items and amount to the Screen */}
                {income.map(item=>{
                    return(
                        <>
                    <Box key={item.id} sx={{display:"flex", justifyContent:"space-between", color:"black", marginTop:"10px"}}>
                    <Typography>{item.description}</Typography>
                    <Typography>{item.amount}</Typography>
                    <Button variant="contained" onClick={function(){IcDelete(item.id)}}><DeletIcon/></Button>
                </Box>
                <hr></hr>
                        </>
                    )
                })}
            </Box>

            <Box sx={{width:"350px", border:"1px solid gray", padding:"10px 20px 10px 20px", color:"green"}}>
                
                <Typography variant='h6'>Expense</Typography>
                
                {/* Expenditure will replace by map */}
                 {/* Renduring the Expenditure items and amount to the Screen */}
                {expense.map(item=>{
                    return(
                        <>
                    <Box key={item.id} sx={{display:"flex", justifyContent:"space-between", color:"black", marginTop:"10px"}}>
                    <Typography>{item.description}</Typography>
                    <Typography>{item.amount}</Typography>
                    <Button variant="outline" onClick={function(){ExDelete(item.id)}}><DeletIcon/></Button>
                </Box>
                <hr></hr>
                        </>
                    )
                })}
                
            </Box>
        </DisplayBox>
    </MainBox>
  )
}

export default Down