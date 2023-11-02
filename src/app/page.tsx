"use client";

import { Provider } from 'react-redux';
import store from '../redux/store';
import Dashboard from '../components/dashboard';
import DataFetcher from '@/components/dataFetcher';

export default function Home() {
  return (
    <Provider store={store}>
      <DataFetcher />
      <Dashboard />
    </Provider>
  )
}
