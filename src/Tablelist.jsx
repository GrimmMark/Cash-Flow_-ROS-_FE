import { Link } from 'react-router-dom'; 
import { tables } from './data/tables';

export const Tablelist = () => {
  return (
    <div className='Navbar' >
    

      {tables.map((table) => {
        return (<div className="navc" key={table.name} ><Link key={table.name} className="nav" to={"/" + table.name}> {table.name} </Link></div>)
      })}

    </div>);
};

