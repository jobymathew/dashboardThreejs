"use client";

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../redux/slice';

const DataFetcher: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching data (replace with actual API call)
    const fakeData = {
      wins: 15,
      constructors: 10,
    };

    // Dispatch the fake data to the Redux store
    dispatch(setData(fakeData));
  }, [dispatch]);

  return null;
};

export default DataFetcher;
