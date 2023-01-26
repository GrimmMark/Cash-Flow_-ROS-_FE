import { Link } from 'react-router-dom';

export const DisplayList = () => {

  return (
    <div className="Navbar">

      <Link className="nav" to="/Home">{' '}Home{' '}</Link>
      <Link className="nav" to="/Bill">
        {' '}
        Rechnung{' '}
      </Link>
      <Link className="nav" to="/Bar">{' '}Bar{' '}</Link>
      <Link className="nav" to="/Kitchen">{' '}Küche{' '}</Link>
      <Link className="nav" to="/Bon">
        {' '}
        Bon{' '}
      </Link>
      <Link className="nav" to="/alleBestellungen">{' '}Alle Bestellungen{' '}</Link>
      <Link className="nav" to="/offeneBestellungen">{' '}Offene Bestellungen{' '}</Link>
    </div>
  );
};


