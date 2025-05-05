import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.min.js"
import SignIn from './components/SignIn';
import SignUP from './components/SignUP';
import GetProducts from './components/GetProducts';
import SingleProducts from './components/SingleProducts';
import AddProducts from './components/AddProducts';
import Test from './components/Test';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-primary">DOG'S WORLD</h1>
      <Routes>
        <Route path='/signup' element={<SignUP/>} />
        <Route path='/' element={<GetProducts/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/product' element={<SingleProducts/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>
        <Route path='/chatbot' element={<Test/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
