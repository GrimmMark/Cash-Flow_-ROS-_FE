import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';


export const Bon = () => {

    const { allOrders } = useContext(AppContext);
    // const bon = allOrders.filter((bon) => bon.ready === true);

    return (
        <div className="Tisch">
            <div className="Bon">
                {allOrders.filter((orders) => orders.ready === true).map((order) => (
                    <><table className="Bon">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Tisch</th>
                                <th>Bediener</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={order.ID * 7}>
                                <td>{order.name}</td>
                                <td>{order.table}</td>
                                <td>{order.bediener}</td>
                            </tr>
                        </tbody>
                    </table><p>-------------------------------------------------------------</p></>
                ))}
            </div>
        </div>
    );
}