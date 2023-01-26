import { Link } from 'react-router-dom'; // import link component
import { tables } from './data/tables';

export const Tablelist = () => {
  return (
    <div className='Navbar' >
      {/* using Link to adress the different pages like defined before in <Routes> */}

      {tables.map( (table)=> {
        return(<div classname="navc" key={table.name} ><Link key={table.name} className="nav" to={"/"+table.name}> {table.name} </Link></div>)
      } )}
       
    </div>);
  };

