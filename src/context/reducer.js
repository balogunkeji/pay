import {
    SET_PAYMENT,
    SET_AMOUNT,
    SET_CHANNEL,
    SET_PROCESSING_FEE,
  } from './types';
  
  // Reducer
  export const paymentReducer = (state, action) => {
    switch (action.type) {
      case SET_PAYMENT:
        return action.payload;
      case SET_AMOUNT:
        return {
          ...state,
          amount: action.payload,
        };
      case SET_CHANNEL:
        return {
          ...state,
          amount: action.payload,
        };
      case SET_PROCESSING_FEE:
        return {
          ...state,
          processingFee: action.payload,
        };
      default:
        return state;
    }
  };
  