import { useContext } from 'react';
import { AppContext } from '../App';

export const ProfileSelect = () => {
  const { currentProfile, setCurrentProfile } = useContext(AppContext);

  return (
    <div className="Navbar">
      <button 
        className={
          currentProfile === 'Bediener1' ? 'nav active-profile' : 'navP'
        }
        onClick={() => setCurrentProfile('Bediener1')}>
        Bediener1
      </button>
      <button 
        className={
          currentProfile === 'Bediener2' ? 'nav active-profile' : 'navP'
        }
        onClick={() => setCurrentProfile('Bediener2')}>
        Bediener2
      </button>
      <button      
        className={
          currentProfile === 'Bediener3' ? 'nav active-profile' : 'navP'
        }
        onClick={() => setCurrentProfile('Bediener3')}>
        Bediener3
      </button>
    </div>
  );
};
