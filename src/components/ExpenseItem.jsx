import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "./context/AppContext";
function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);
  const deleteExpenseHandler = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span
          className="badge badge-primary badge-pill mr-3"
          style={{
            backgroundColor: "#066CF5",
            borderRadius: "8px",
            padding: "3px 8px",
          }}
        >
          ${props.cost}
        </span>
        <TiDelete size="1.5em" onClick={deleteExpenseHandler}></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
