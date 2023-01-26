import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

export const AlleBestellungen = () => {

  const { allOrders } = useContext(AppContext);

  return (
    <div className="Tisch">
      <h1>All Orders</h1>
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
          {allOrders.map((order) => (
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
              
              <td>{order.price}</td>
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
    </div>
  );
};