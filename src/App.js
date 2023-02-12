import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
//import Stickybar from './components/Stickybar';
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container-fluid m-2">
        <Header />
        
          <Routes>
            <Route 
              path='/' 
              element={<Home /> }>
            </Route>
            <Route 
              path='/about' 
              element={<About />}>
            </Route>
            <Route 
              path='/work' 
              element={<Work />}>
            </Route>
            <Route 
              path='/contact' 
              element={<Contact />}>
            </Route>
          </Routes>
          
          <Footer />
      </div>
    </Router>
  );
}

export default App;
