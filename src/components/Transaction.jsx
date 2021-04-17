import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ value }) {
  const { id, text, amount } = value;
  const { deletTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className={amount < 0 ? "minus" : "plus"} key={id}>
        {text}{" "}
        <span>{amount < 0 ? `- $${Math.abs(amount)}` : `$${amount}`}</span>
        <button className="delete-btn" onClick={() => deletTransaction(id)}>
          x
        </button>
      </li>
    </>
  );
}
