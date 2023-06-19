import logo from './logo.svg';
import './App.css';
import Topnav from './components/header/Topnav';
import Navbar from './components/header/Navbar';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs';
import Catagory from './components/Catagory';
import WhychooseUs from './components/WhychooseUs';
import Support from './components/Support';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Topnav/>
     <Navbar/>
     <Banner/>
     <AboutUs/>
     <Catagory/>
     <WhychooseUs/>
     <Support/>
     <Blog/>
     <Testimonial/>
     <Footer/>
    </>
  );
}

export default App;
