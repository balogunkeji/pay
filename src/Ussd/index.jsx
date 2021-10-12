import { useState, useEffect, useContext} from "react";
import Button from "../Form/formbut";
import Ussd from "./style";
import Loader from "../Loader";
import { PaymentContext } from "../context/index";
import { paymentFormular } from "../paymentFormula";

const USSD = () => {
  const {paymentState} = useContext(PaymentContext);
  const options = [
    {
      bank: "First Bank",
      ussd: "894",
    },
    {
      bank: "Polaris Bank",
      ussd: "784",
    },
    {
      bank: "Access Bank",
      ussd: "124",
    },
    {
      bank: "Kuda Bank",
      ussd: "994",
    },
    {
      bank: "Access Bank",
      ussd: "555",
    },
    {
      bank: "United Bank of Africa",
      ussd: "990",
    },
  ];

  const [render, setRender] = useState(null);
  const [showData, setShowData] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };


  const onChange = ({ target }) => {
    setRender({ ...render, [target.name]: target.value });
    setCount([Math.floor(Math.random() * 100000000000000)]);
    setIsLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (render !== null) {
        setShowData(true);
      }
      setIsLoading(false);
    }, 4000);
  }, [render]);
  console.log(isLoading, "loading");

  return (
    <Ussd>
      <div className="head">
        <h5>CHOOSE YOUR BANK TO START THE PAYMENT</h5>
        <div></div>
      </div>

      {showData && (
        <div>
          <p>
            *{options.find((option) => option.bank === render.bank)?.ussd}*000*
            {count}#
          </p>
          <p>Dial the code to complete the transaction</p>
        </div>
      )}
      {isLoading && (
        <Loader/>
      )}
      <select name="bank" onChange={onChange}>
        <option hidden>Click here to choose</option>
        {options.map((option) => (
          <option value={option.bank}>{option.bank}</option>
        ))}
      </select>
            {showData &&(
                <div>
                    <Button amount={parseInt(paymentState?.amount)   + parseInt(paymentFormular(paymentState?.amount, "ussd")?.totalCharges -
            paymentState?.amount)}/>
                    
                </div>
            )}
    </Ussd>
  );
};

export default USSD;
