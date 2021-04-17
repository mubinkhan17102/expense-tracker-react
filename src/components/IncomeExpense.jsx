import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const stateValue = useContext(GlobalContext);
  const { transations } = stateValue;
  const amount = transations.map((val) => val.amount);
  let plus = 0,
    minus = 0;
  amount.forEach((element) => {
    if (element < 0) {
      minus = minus + element;
    } else {
      plus = plus + element;
    }
  });

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4 className="money plus">Income</h4>
          <p className="money plus">{plus}</p>
        </div>
        <div>
          <h4 className="money minus">Expense</h4>
          <p className="money minus">{Math.abs(minus)}</p>
        </div>
      </div>
    </>
  );
}
