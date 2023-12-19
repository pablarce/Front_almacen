import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Gestion from './Gestion';

import "./App.css"
import { useState } from 'react';

interface Client {
    username: string
    wallet: number
    type: string
}

function App() {
    const [client, setClient] = useState<Client | undefined>(undefined)

    return (
        <div className='bg-gray-900 overflow-hidden'>
            
            <Routes>
                <Route path="/" element={<Login setClient={setClient} /> } />
                <Route path="gestion" element={ <Gestion client = {client} /> } />
            </Routes>
        </div>
  );
}

export default App;
