import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePages from './pages/HomePages'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/sass/style.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import AboutPages from './pages/AboutPages';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
    <Routes>
        <Route path='/' element={<HomePages/>} />
        <Route path='/about' element={<AboutPages/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
       
    
  )
}

export default App