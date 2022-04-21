import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// componentler gelecek

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import ContactUs from './components/ContactUs';





function App () {
  return (
   
  <div>
   
<Navbar/>
<Header/>
<AboutMe/>
<Services/>
<Experience/>
<ContactUs/>

  </div>
  
  );
}

export default App;
