
import { Toaster } from 'react-hot-toast';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work'


function App() {
  return (
    <>
       <Header />
       <Home />
       <Work />
       <Contact />
       <Footer />
       <Toaster />
       
    </>
  );
}

export default App;
