import React, {useContext} from "react";
import Push from "../Payment/pushpay.svg";
import Card from "../Card/card";
import USSD from "../Ussd/ussd";
import Bank from "../Bank/bank";
import Wallet from "../Wallet/wallet";
import Pay from "../Payment/style.js";
import { AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BiHash } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { paymentFormular } from "../paymentFormula";
import { PaymentContext } from "../context";


const Payment = () => {
  const {paymentState} = useContext(PaymentContext);
  const routes = [
    {
      path: "/payment/card",
      exact: true,
      sidebar: () => <p>NGN {paymentFormular(paymentState?.amount, 'card')?.pushpayCharge}</p>,
      main: () => <Card />,
    },
    {
      path: "/payment/ussd",
      sidebar: () => <p>NGN {paymentFormular(paymentState?.amount, 'ussd')?.pushpayCharge}</p>,
      main: () => <USSD />,
    },
    {
      path: "/payment/bank",
      sidebar: () => <p>NGN {paymentFormular(paymentState?.amount, 'bank')?.pushpayCharge}</p>,
      main: () => <Bank />,
    },
    {
      path: "/payment/wallet",
      sidebar: () => <p>NGN {paymentFormular(paymentState?.amount, 'wallet')?.pushpayCharge}</p>,
      main: () => <Wallet />,
    },
  ];
  
  return (
    <Pay className="pay">
      <Router>
        <div className="side">
          <div className="header">
            <img src={Push} alt="" />
          </div>
          <div className="link">
            <h5>Choose payment method</h5>
            <ul>
              <li>
                <Link to="/payment/card" className="links">
                  <AiOutlineCreditCard />
                  <span>Card</span>
                </Link>
              </li>
              <li>
                <Link to="/payment/ussd" className="links">
                  <BiHash />
                  <span>USSD</span>
                </Link>
              </li>
              <li>
                <Link to="/payment/bank" className="links">
                  <AiOutlineBank />
                  <span>Bank</span>
                </Link>
              </li>
              <li>
                <Link to="/payment/wallet" className="links">
                  <IoWalletOutline />
                  <span>PushPay wallet</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebars">
            <p>Processing fee</p>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>
        </div>
        <div className="main">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </Pay>
  );
};

export default Payment;
