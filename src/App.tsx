import React from 'react';

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Button } from '@mui/material';
import { increment } from './redux/slices/counter.slice';


function App() {

  const counter = useAppSelector((state) => state.counterSlice);
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(increment())
  }


  return (
    <div className="App">
      <h1> {counter.value}</h1>
      <Button onClick={handleIncrease}> Add</Button>
    </div>
  );
}

export default App;
