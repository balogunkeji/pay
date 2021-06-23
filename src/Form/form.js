import { useContext, useState } from "react";
import FormData from "./style";
import Group from '../Form/group.svg';
import Button from "./formbut";
import { useHistory } from "react-router-dom";
// import { CartContext } from "../Context";
import {PaymentContext} from "../context/index";
import {SET_AMOUNT} from "../context/types";

const Form = () => {
  const history = useHistory()
  const context = useContext(PaymentContext);
  const {dispatch} = useContext(PaymentContext);
  const [form, setForm] = useState({ fname: "", lname: "", email: "" ,amount: '' });

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: SET_AMOUNT, payload: form?.amount})
    
    history.push('/payment/card')
    history.go(0)
    console.log(form);
    setForm({
      fname: "",
      lname: "",
      email: "",
      amount: ''
    });
  }


  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  return (
    <FormData onSubmit={handleSubmit} >
        <div className='header'>
          <img src={Group} alt ='group'/>
          <h4>Pushpay</h4>
        </div>
      <div  className='form'>
      <div className="name">
        <div>
        <label>First name</label>
        <input
          type="text"
          autoComplete
          name="fname"
          required
          value={form.fname}
          onChange={handleChange}
        />
        </div>
        <div>
        <label>Last name</label>
        <input
          type="text"
          autoComplete
          name="lname"
          required
          value={form.lname}
          onChange={handleChange}
        />
        </div>
      </div>
      <label>Email address</label>
        <input
          type="email"
          autoComplete
          name="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <label>Amount</label>
        <input
          type="number"
          autoComplete
          name="amount"
          required
          value={form.amount}
          onChange={handleChange}
        />
        <Button amount={form.amount}/>
      </div>
    </FormData>
  );
};

export default Form;
