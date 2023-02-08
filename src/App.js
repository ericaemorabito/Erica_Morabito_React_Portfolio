import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
//import Stickybar from './components/Stickybar';
import Home from "./components/Home";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
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
          {/* <Strengths />
          <Skills /> */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
