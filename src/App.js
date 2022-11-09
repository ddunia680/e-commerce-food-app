import './App.css';
import Builder from './containers/Builder/builder';
import { Route, Routes } from 'react-router-dom';
import Orders from './containers/orders/orders';
import { useSelector } from 'react-redux';

function App() {
  let email = useSelector(state => state.Authenticate.emailAddress);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Builder />} />
        {email === 'ddunia680@gmail.com' ? <Route path='/orders' element={<Orders/>} /> : null}
      </Routes>
    </div>
  );
}

export default App;
