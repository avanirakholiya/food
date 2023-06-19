import Map from './Map';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './Detail';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Map/>}></Route>
          <Route path='/Map/:id' element={<Detail />}></Route>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
