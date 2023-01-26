import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

export const Bediener1 = () => {

  const { allOrders, setAllOrders } = useContext(AppContext);
  const sum1 = allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
   && (day.paid == true) && (day.bediener == "Bediener1")).reduce((total, order) => total + order.price, 0).toFixed(2);
   const handleClick = () => {
    const updatedOrders = allOrders.map(o => o.bediener === "Bediener1" && o.invoice === false ? { ...o, invoice: true } : o)
    setAllOrders(updatedOrders)
};


  return (
    <div className="Tisch">
      <h2>Tagesumsatz Bediener1</h2>
      <table>
        <thead>
          <tr>
            <th>Nr</th>
            <th>{" "}</th>
            <th>{" "}</th>
            <th>name</th>
            <th>{" "}</th>
            <th>{" "}</th>
            <th>price</th>
            <th>{" "}</th>
            <th>{" "}</th>
            <th>table</th>
            <th>{" "}</th>
            <th>{" "}</th>
            <th>date</th>
            <th>{" "}</th>
            <th>{" "}</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.filter((day) => day.date === new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
           && (day.paid == true) && (day.bediener == "Bediener1" && day.invoice == false)).map((order) => (
            <tr key={order.Nr}>
             <td>{order.Nr}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.name}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.price}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.table}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.date}</td>
              <td>{" "}</td>
              <td>{" "}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3> Gesamt: {sum1}$</h3>
      <button id="btn" onClick={() => handleClick()}> Print </button>
    </div>
  );
  
};
