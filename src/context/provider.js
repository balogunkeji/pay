import React, { createContext, useReducer, useEffect } from 'react';
import { paymentReducer } from './reducer';

const PaymentContext = createContext();
const PaymentContextProvider = ({ children }) => {
  let initialState = localStorage.getItem('payment');

  if (initialState) {
    initialState = JSON.parse(initialState);
  } else {
    initialState = {amount: 0, channel: "", processingFee: 0};
  }

  const [paymentState, dispatch] = useReducer(paymentReducer, initialState);

  useEffect(() => {
    localStorage.setItem('payment', JSON.stringify(paymentState));
  }, [paymentState]);

  return (
    <PaymentContext.Provider value={{ paymentState, dispatch }}>
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentContextProvider };
