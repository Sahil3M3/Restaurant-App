import React, { useRef } from 'react'
import classes from "./MealItemForm.module.css"
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  
    const amountInputRef=useRef()

    
    const submitHander=event=>{
      event.preventDefault();
      const enteredAmount=amountInputRef.current.value;
      const enteredAmountNumber=+enteredAmount;
      if(enteredAmount.trim().length===0 ||enteredAmountNumber>1){
        return ;
      }
      props.addToCart(enteredAmountNumber)
    }
    return (
        <form onSubmit={submitHander} className={classes.form}>
            <Input ref={amountInputRef} 
            label="Amount" input={{id:"amount",type:"number" , min:"1",max:"5",step:'1',defaultValue:"1"}}/>
            <button type='submit'>+ Add</button>
        </form>
)
}

export default MealItemForm