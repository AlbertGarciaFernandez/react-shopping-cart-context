import { React, useReducer, createContext } from "react";
import { reducer, initialState } from "./state-reducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cartItems, account, billing, payment, currentStep } = state;

  return (
    // <StateContext.Provider value={[state, dispatch]}>
    <StateContext.Provider
      value={{
        cartItems: cartItems,
        account: account,
        billing: billing,
        payment: payment,
        dispatch: dispatch,
        currentStep: currentStep,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
