import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactionList: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deletTransaction = (id) => {
    dispatch({
      type: 'DELET_TRANSACTION',
      payload:id
    })
  }
  const addTransaction = (item) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider value={{ transations: state.transactionList,deletTransaction,addTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
}
