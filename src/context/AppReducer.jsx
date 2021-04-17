export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELET_TRANSACTION":
      return {
        ...state,
        transactionList: state.transactionList.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactionList: [...state.transactionList, action.payload],
      };
    default:
      return state;
  }
};
