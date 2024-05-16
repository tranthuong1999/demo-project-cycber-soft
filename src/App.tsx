import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Button } from '@mui/material';
import { increment } from './redux/slices/counter.slice';
import { apiGetSession } from './apis/user.api';
import Appbar from './components/Appbar';
import Banner from './components/Banner';


function App() {

  const counter = useAppSelector((state) => state.counterSlice);
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(increment())
  }

  useEffect(() => {
    apiGetSession()
  }, [])

  return (
    <div>
      <Appbar />
      <Banner />
      {/* <h1> {counter.value}</h1>
      <Button onClick={handleIncrease}> Add</Button> */}
    </div>
  );
}

export default App;
