"use client";

import { Provider } from 'react-redux';
import store from '../redux/store';
import Dashboard from '../pages/dashboard';

export default function Home() {

  // if(store) {
    return (
      <Provider store={store}>
         <Dashboard />
       </Provider>
    )
  // } else {
    // return null;
  // }
}
