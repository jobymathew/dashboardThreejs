"use client";

import { Provider } from 'react-redux';
import store from '../redux/store';
import Dashboard from '../components/dashboard';

export default function Home() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}
