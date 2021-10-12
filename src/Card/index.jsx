import { useState, useContext} from "react";
import Cards from "./style";
import Button from "../Form/formbut";
import { PaymentContext } from "../context/index";
import { paymentFormular } from "../paymentFormula";

const Card = () => {
  const { paymentState } = useContext(PaymentContext);
  const [cards, setCards] = useState({ number: "", expiry: "", cvc: "" });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cards);
    setCards({
      number: "",
      expiry: "",
      cvc: "",
    });
  };

  const handleChange = ({ target }) => {
    setCards({ ...cards, [target.name]: target.value });
  };

  return (
    <Cards onSubmit={handleSubmit}>
      <div className="form">
        <div className="head">
          <h5>Add your card details</h5>
          <div></div>
        </div>
        <label>Card number</label>
        <input
          type="tel"
          autoComplete
          name="number"
          placeholder="0000 0000 0000 0000"
          value={cards.number}
          onChange={handleChange}
        />
        <div className="name">
          <div>
            <label>Expiry number</label>
            <input
              type="tel"
              autoComplete
              name="expiry"
              required
              placeholder="MM/YY"
              value={cards.expiry}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CVC</label>
            <input
              type="tel"
              autoComplete
              name="cvc"
              placeholder="CVC"
              required
              value={cards.cvc}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button amount={parseInt(paymentState?.amount)   + parseInt(paymentFormular(paymentState?.amount, "card")?.totalCharges -
            paymentState?.amount)} />
      </div>
    </Cards>
  );
};

export default Card;
