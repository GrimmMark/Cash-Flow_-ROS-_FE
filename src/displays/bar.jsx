import { useContext } from 'react';
import { AppContext } from '../App';

export const Bar = () => {

  const { allOrders, setAllOrders } = useContext(AppContext);
  const handleClick = (order) => {
    const updatedOrder = { ...order, ready: true }
    const updatedOrders = allOrders.map(o => o.Nr === updatedOrder.Nr ? updatedOrder : o)
    setAllOrders(updatedOrders)
  };

  return (
    <div className="TBK">
      <h1>Bar</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tisch</th>
            <th>Bediener</th>
            <th>Uhrzeit</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.filter((order) => order.cat === "drink" && order.ready === false).map((order) => (
            <tr key={order.Nr}>
              <td>{order.ID}</td>
              <td>{order.name}</td>
              <td>{order.table}</td>
              <td>{order.bediener}</td>
              <td>{order.time}</td>
              <td><button id="btn" onClick={() => handleClick(order)}> Fertig </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




//Source: https://stackoverflow.com/questions/72438435



