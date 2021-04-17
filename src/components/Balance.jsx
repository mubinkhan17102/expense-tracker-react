import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const stateValue = useContext(GlobalContext);
  const { transations } = stateValue;
  const amount = transations.map((val) => val.amount);
  const total = amount
    .reduce((total, element) => total + element, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
}
