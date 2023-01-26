import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Products } from "../data/products"

export const Table5 = () => {

  const { allOrders, setAllOrders, currentProfile } = useContext(AppContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const unpaidOrders = allOrders.filter(o => o.table === "Tisch5" && o.bill === false);
  const sum = unpaidOrders.reduce((total, order) => total + order.price, 0).toFixed(2);
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handlePay = () => {
    const updatedOrders = allOrders.map(o => o.table === "Tisch5" && o.bill === false ? { ...o, bill: true } : o)
    setAllOrders(updatedOrders)
  };
  const handleAdd = (product) => {
    const newOrder = {
      Nr: allOrders.length,
      ID: product.ID,
      name: product.name,
      cat: product.cat,
      price: product.price,
      table: 'Tisch5',
      bediener: currentProfile,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      time: new Date().toLocaleTimeString(),
      ready: false,
      bill: false,
      paid: false,
      invoice: false
    };
    setAllOrders([...allOrders, newOrder]);
  };
  const drinkList = Products.filter((product) => product.cat === "drink").map((product) => (
    <button key={product.name} id="btn" onClick={() => handleAdd(product)}>
      {product.name}
    </button>
  ));
  const pastaList = Products.filter((product) => product.cat === "Pasta").map((product) => (
    <button key={product.name} id="btn" onClick={() => handleAdd(product)}>
      {product.name}
    </button>
  ));
  const vorList = Products.filter((product) => product.cat === "Vor").map((product) => (
    <button key={product.name} id="btn" onClick={() => handleAdd(product)}>
      {product.name}
    </button>
  ));
  const hauptList = Products.filter((product) => product.cat === "Haupt").map((product) => (
    <button key={product.name} id="btn" onClick={() => handleAdd(product)}>
      {product.name}
    </button>
  ));
  const nachList = Products.filter((product) => product.cat === "Nach").map((product) => (
    <button key={product.name} id="btn" onClick={() => handleAdd(product)}>
      {product.name}
    </button>
  ));
  const pizzaList = Products.filter((product) => product.cat === "Pizza").map((product) => (
    <button key={product.name} id="btn" onClick={() => handleAdd(product)}>
      {product.name}
    </button>
  ));


  return (
    <div className="Tisch">
      <h2>Tisch5</h2>
      <div className='Tisch'>
          <table className='tab'>
          <thead>
            <tr>
            <th>Nr</th>
              <th>Name</th>
              <th>Bediener</th>            
              <th>Uhreit</th>
              <th>Preis</th>
            </tr>
          </thead>
          <tbody>
            {unpaidOrders.map((order) => (
              <tr key={order.Nr}>
                <td>{order.Nr}</td>
                <td>{order.name}</td>
                <td>{order.bediener}</td>                
                <td>{order.time}</td>
                <td>{order.price} €</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3> Gesamt: {sum} €</h3>
        <button id="btn" onClick={() => handlePay()} disabled={unpaidOrders.length === 0}> Bezahlen</button>
      </div>
      <div className="navbar">
        <button className='nav' onClick={handleClick}>Add Order</button>
      </div>
      {isNavOpen && (
        <div className="NavbarT">
          <div>{drinkList}</div>
          <div>{vorList}</div>
          <div>{pastaList}</div>
          <div>{hauptList}</div>
          <div>{pizzaList}</div>
          <div>{nachList}</div>
        </div>
      )}
    </div>
  );
};
