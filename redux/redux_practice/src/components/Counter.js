import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToNumber, minusToNumber } from "../actions/index";

function Counter() {
  const state = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  const handleClickPlusButton = () => {
    dispatch(addToNumber(state));
  };

  const handleClickMinusBUtton = () => {
    dispatch(minusToNumber(state));
  };
  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleClickPlusButton}>plus</button>
      <button onClick={handleClickMinusBUtton}>minus</button>
    </>
  );
}

export default Counter;
