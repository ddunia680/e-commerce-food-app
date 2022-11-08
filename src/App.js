import './App.css';
import Builder from './containers/Builder/builder';
import { Route, Routes } from 'react-router-dom';
import Orders from './containers/orders/orders';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Builder />} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
    </div>
  );
}

export default App;
