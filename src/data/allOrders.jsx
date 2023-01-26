import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';




export const allOrders = () => {

  const allOrders = [
    {
      Nr: 0,
      ID: 0,
      name: Cola,
      cat: drink,
      price: 3.80,
      table: Table1,
      bediener: Bediener1,
      date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
      time: new Date().toLocaleString(currentTime),
      ready: false,
      bill: false,
      paid: false,
      invoice: false,
      EC: false
    },
    {...AppContext}

  ];
}
export default allOrders;