import React, {useContext} from 'react';
import Wallets from './style'
import Button from '../Form/formbut';
import { PaymentContext } from "../context/index";
import { paymentFormular } from "../paymentFormula";

const Wallet = () => {
    const {paymentState} = useContext(PaymentContext);

    function handleOnChange(event){
        const {value} = event.target;

        if(value.length > 1){
            if(!value.toLowerCase().startsWith("pp")){
                console.log("Enter a valid pushpay id")
            }
        }

        
    }

    return ( 
        <Wallets>
            <div className='form'>
            <div className="head">
          <h5>Add your card details</h5>
          <div></div>
        </div>
        <form>
            <label>Pushpay ID</label>
            <input
            onChange={handleOnChange}
            placeholder='pp7039518150'
            />
            <Button amount={paymentState?.amount + paymentFormular(paymentState?.amount, 'wallet')?.pushpayCharge || 0} />
        </form>
            </div>
        </Wallets>
     );
}
 
export default Wallet;