import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/Footer';
import Book from './routes/Book';
import Packages from './routes/Packages';
import Contact from './routes/contact';
import Gallery from './routes/Gallery';
import Services from './routes/services';
import Home from './routes/Home';
import Review from './routes/review';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      
      {/* <Book/> */}
      {/* <Navbar/> */}
      {/* <Footer/> */}
      {/* <Packages/> */}
      {/* <Contact/> */}
      {/* <Gallery/> */}
      {/* <Services/> */}
     {/* <Home/> */}

     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
