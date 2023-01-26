import { Link } from 'react-router-dom';

export const MasterMenu = () => {
  return (
    <div className="Navbar">
      <div>{new Date().toLocaleString()}__Cash&Flow_ROS__</div>


      <Link className="nav" to="/Bediener1">
        {' '}
        Bediener1 Umsatz{' '}
      </Link>
      <Link className="nav" to="/Bediener2">
        {' '}
        Bediener2 Umsatz{' '}
      </Link>
      <Link className="nav" to="/Bediener3">
        {' '}
        Bediener3 Umsatz{' '}
      </Link>
      <Link className="nav" to="/Tagesumsatz">
        {' '}
        Tagesumsatz{' '}
      </Link>
      {/* <Link className="nav" to="/Bill">
        {' '}
        Rechnung{' '}
      </Link>
      <Link className="nav" to="/Bon">
        {' '}
        Bon{' '}
      </Link> */}

    </div>
  );
};
