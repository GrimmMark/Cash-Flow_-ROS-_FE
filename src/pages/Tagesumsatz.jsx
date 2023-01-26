import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

export const Tagesumsatz = () => {

  const { allOrders } = useContext(AppContext);
  const sum = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) && day.paid == true).reduce((total, order) => total + order.price, 0).toFixed(2);
  const sum1 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    && (day.paid == true) && (day.invoice == true) && (day.bediener == "Bediener1")).reduce((total, order) => total + order.price, 0).toFixed(2);
  const sum2 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    && (day.paid == true) && (day.invoice == true) && (day.bediener == "Bediener2")).reduce((total, order) => total + order.price, 0).toFixed(2);
  const sum3 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    && (day.paid == true) && (day.invoice == true) && (day.bediener == "Bediener3")).reduce((total, order) => total + order.price, 0).toFixed(2);
  const proportion1 = (100 / (parseFloat(sum)) * parseFloat(sum1)).toFixed(2)
  const proportion2 = (100 / (parseFloat(sum)) * parseFloat(sum2)).toFixed(2)
  const proportion3 = (100 / (parseFloat(sum)) * parseFloat(sum3)).toFixed(2)


  return (
    <div className="Tisch">
      <h1>Tagesumsatz Gesamt</h1>
      <table>
        <thead>
          <tr>
            <th>Nr</th>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <th>Name</th>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>

            <th>Preis</th>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <th>Tisch</th>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <th>Bediener</th>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <th>Datum</th>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <td>{" "}</td>
            <th>Uhrzeit</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) && day.paid == true).map((order) => (
            <tr key={order.Nr}>
              <td>{order.Nr}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.name}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>

              <td>{order.price}0 €</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.table}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.bediener}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.date}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2> Gesamt: {sum}€ Brutto</h2>
      <h3> Tagesumsatz Bediener1: {sum1}€ {" "} __ {proportion1}%</h3>
      <h3> Tagesumsatz Bediener2: {sum2}€ {" "} __ {proportion2}%</h3>
      <h3> Tagesumsatz Bediener3: {sum3}€ {" "} __ {proportion3}%</h3>
    </div>
  );
};