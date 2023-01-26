import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

export const Bediener3 = () => {

  const { allOrders, setAllOrders } = useContext(AppContext);
  const sum1 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    && (day.paid == true) && (day.bediener == "Bediener3")).reduce((total, order) => total + order.price, 0).toFixed(2);
  const sum2 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    && (day.paid == true) && (day.bediener == "Bediener3") && (day.EC == false)).reduce((total, order) => total + order.price, 0).toFixed(2);
  const sum3 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    && (day.paid == true) && (day.bediener == "Bediener3") && (day.EC == true)).reduce((total, order) => total + order.price, 0).toFixed(2);
  const sum4 = (sum1 - sum3).toFixed(2);
  const handleClick = () => {
    const updatedOrders = allOrders.map(o => o.bediener === "Bediener3" && o.invoice === false ? { ...o, invoice: true } : o)
    setAllOrders(updatedOrders)
  };


  return (
    <div className="Tisch">
      <h1>Tagesumsatz Bediener3</h1>
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
          {allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            && (day.paid == true) && (day.bediener == "Bediener3" && day.invoice == false)).map((order) => (
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
      <h1> Gesamt: {sum1}€</h1><h3> Gesamt Bar: {sum2}€</h3><h3> Gesamt EC: {sum3}€</h3>
      <h1> Abrechnung Bar: {sum4}€</h1>
      <button id="btn" onClick={() => handleClick()}> Print </button>
    </div>
  );
};