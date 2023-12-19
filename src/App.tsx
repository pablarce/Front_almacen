import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Gestion from './Gestion';

import "./App.css"

function App() {
    return (
        <div className='bg-gray-900 overflow-hidden'>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="gestion" element={ <Gestion /> } />
            </Routes>
        </div>
  );
}

export default App;
