import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transtion from "./Transaction";

export default function TransactionList() {
  const stateValue = useContext(GlobalContext);
  const { transations } = stateValue;
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transations.map((value) => (
          <Transtion key={value.id} value={value} />
        ))}
      </ul>
    </>
  );
}
