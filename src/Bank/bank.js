import { useState, useEffect, useContext } from "react";
import { PaymentContext } from "../context/index";
import Button from "../Form/formbut";
import Banks from "./style";
import { paymentFormular } from "../paymentFormula";

const Bank = () => {
  const { paymentState } = useContext(PaymentContext);
  const options = [
    {
      bank: "First Bank",
    },
    {
      bank: "Polaris Bank",
    },
    {
      bank: "Access Bank",
    },
    {
      bank: "Kuda Bank",
    },
  ];

  const [render, setRender] = useState(null);
  const [showData, setShowData] = useState(false);
  const [num, setNum] = useState({ number: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNum({
      number: "",
    });

    // setErrorMessage('input a valid account')
  };

  const onChange = ({ target }) => {
    setRender({ ...render, [target.name]: target.value });
    setNum({ ...num, [target.name]: target.value });
  };

  useEffect(() => {
    if (render !== null) {
      setShowData(true);
      console.log(render);
    }
  }, [render]);

  return (
    <Banks>
      <div className="head">
        <h5>CHOOSE YOUR BANK AND YOUR ACCOUNT DETAILS TO START YOUR PAYMENT</h5>
        <div></div>
      </div>
      <select onChange={onChange}>
        <option hidden>Click here to choose</option>
        {options.map((option) => (
          <option value={option.bank}>{option.bank}</option>
        ))}
      </select>

      {showData && (
        <form onsubmit={handleSubmit}>
          <input
            type="tel"
            autoComplete
            name="number"
            value={num.number}
            required
            placeholder="Enter your account details"
            onChange={onChange}
          />

          <Button
            amount={
              parseInt(paymentState?.amount) +
              parseInt(
                paymentFormular(paymentState?.amount, "bank")?.totalCharges -
                  paymentState?.amount
              )
            }
          >
            {" "}
            Submit
          </Button>
          {/* {errorMessage && <div className="error"> {errorMessage} </div>} */}
        </form>
      )}
    </Banks>
  );
};

export default Bank;
