import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './tables/Home';
import { Bar } from './displays/bar';
import { Kitchen } from './displays/kitchen';
import { Bill } from './displays/bill';
import { Bon } from './displays/bon';
import { Tablelist } from './Tablelist';
import { DisplayList } from './Displaylist';
import { MasterMenu } from './MasterMenu';
import { AlleBestellungen } from './pages/alleBestellungen';
import { OffeneBestellungen } from './pages/offeneBestellungen';
import { Tagesumsatz } from './pages/Tagesumsatz';
import { ProfileSelect } from './pages/ProfileSelect';
import { Bediener1 } from './data/bediener1';
import { Bediener2 } from './data/bediener2';
import { Bediener3 } from './data/bediener3';
import { Table1 } from './tables/Table1';
import { Table2 } from './tables/Table2';
import { Table3 } from './tables/Table3';
import { Table4 } from './tables/Table4';
import { Table5 } from './tables/Table5';
import { Table6 } from './tables/Table6';
import { Table7 } from './tables/Table7';
import { Table8 } from './tables/Table8';
import { Table9 } from './tables/Table9';
import { Table10 } from './tables/Table10';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [allOrders, setAllOrders] = useState([]);
  const [tables, setTables] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentProfile, setCurrentProfile] = useState("Bediener1");

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          allOrders,
          setAllOrders,
          tables,
          setTables,
          products,
          setProducts,
          currentProfile,
          setCurrentProfile
        }}>
        <Router>
          <Tablelist />
          <ProfileSelect />
          <div className="Kassa">
            <Routes>
              <Route path="/" id="relement" element={<Home />} />
              <Route path="/Home" id="relement" element={<Home />} />
              <Route path="/bar" id="relement" element={<Bar />} />
              <Route path="/Kitchen" id="relement" element={<Kitchen />} />
              <Route path="/Bill" id="relement" element={<Bill />} />
              <Route path="/Bon" id="relement" element={<Bon />} />
              <Route path="/Table1" id="relement" element={<Table1 />} />
              <Route path="/Table2" id="relement" element={<Table2 />} />
              <Route path="/Table3" id="relement" element={<Table3 />} />
              <Route path="/Table4" id="relement" element={<Table4 />} />
              <Route path="/Table5" id="relement" element={<Table5 />} />
              <Route path="/Table6" id="relement" element={<Table6 />} />
              <Route path="/Table7" id="relement" element={<Table7 />} />
              <Route path="/Table8" id="relement" element={<Table8 />} />
              <Route path="/Table9" id="relement" element={<Table9 />} />
              <Route path="/Table10" id="relement" element={<Table10 />} />
              <Route path="/products" id="relement" element={<products />} />
              <Route path="/Bediener1" id="relement" element={<Bediener1 />} />
              <Route path="/Bediener2" id="relement" element={<Bediener2 />} />
              <Route path="/Bediener3" id="relement" element={<Bediener3 />} />
              <Route path="/AlleBestellungen" id="relement" element={<AlleBestellungen />} />
              <Route path="/OffeneBestellungen" id="relement" element={<OffeneBestellungen />} />
              <Route path="/Tagesumsatz" id="relement" element={<Tagesumsatz />} />          
              <Route path="/ProfileSelect" id="relement" element={<ProfileSelect />} />
            </Routes>
          </div>
          <DisplayList />
          <MasterMenu />

        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
