import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addbooks from './component/Addbooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header2 from './component/Header2';
import Searchbook from './component/Searchbook';
function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
<Route path='/' exact element={<Addbooks/>}/>
<Route path='/search1' exact element={<Searchbook/>}/>



</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
