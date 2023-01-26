import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

export const Bill = () => {

    const { allOrders, setAllOrders } = useContext(AppContext);
    const sum = allOrders.filter((table) => table.bill === true).map((order) => order.price).reduce((total, price) => total + price, 0).toFixed(2);
    const tax = (sum * 0.19).toFixed(2);
    const handleClick = (paid) => {
        const updatedOrder = { ...paid, paid: true }
        const updatedOrders = allOrders.map(o => o.paid === false && o.bill === true ? { ...o, paid: true } : o)
        setAllOrders(updatedOrders)
    };
    const paid = allOrders.filter((paid) => paid.bill === true && paid.paid === false);

    return (
        <div className="Bill">
            <hr></hr>
            <h1>Fake`s Restaurant - Pizzeria</h1>
            <p>Hotstr. Nr. One</p>
            <p>666 Coldashell</p>
            <p>CALL: 911-help me</p>
            <hr></hr>
            <p>{new Date().toLocaleString()}</p>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th className='tableBill'>Name</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th className='tableBill'>Bediener</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th className='tableBill'>Tisch</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th>{" "}</th>
                        <th className='tableBill'>Preis</th>
                    </tr>
                </thead>
                <tbody>
                    {paid.map((order) => (
                        <tr key={order.Nr}>
                            <td>{order.name}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{order.bediener}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{order.table}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{" "}</td>
                            <td>{order.price}0€</td>
                        </tr>))}
                </tbody>
            </table>
            <h2>Gesamt: {sum}€</h2>
            <p>incl. Mw-Steuer: {tax}€</p>
            <hr></hr>
            <h2>See you again!</h2>
            <hr></hr>
            <button id="btn" onClick={() => handleClick(paid)}> Print </button>
        </div>
    );
}