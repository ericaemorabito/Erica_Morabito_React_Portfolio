import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
//import Stickybar from './components/Stickybar';
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importing the icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMessage, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faMessage, faEnvelope, faPaperPlane)

function App() {
  return (
    <Router>
      <div className="App container-fluid m-2">
        <Header />
        
          <Routes>
            <Route 
              path='/Erica_Morabito_React_Portfolio/' 
              element={<Home /> }>
            </Route>
            <Route 
              path='/Erica_Morabito_React_Portfolio/about' 
              element={<About />}>
            </Route>
            <Route 
              path='/Erica_Morabito_React_Portfolio/work' 
              element={<Work />}>
            </Route>
            <Route 
              path='/Erica_Morabito_React_Portfolio/contact' 
              element={<Contact />}>
            </Route>
          </Routes>
          
          <Footer />
      </div>
    </Router>
  );
}

export default App;
