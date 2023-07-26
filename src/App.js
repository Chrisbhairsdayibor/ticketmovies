import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Cart from './components/Cart';



function App() {


  return (
    <div className="App">
     <h1>Redux React</h1>

     <Routes>

<Route path='/' element={<Home />}/>

<Route path='/:id' element={<Details />}/>
<Route path='/cart' element={<Cart />}/>
     </Routes>
    
  
    </div>
  );
}

export default App;
