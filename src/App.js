import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
//import Stickybar from './components/Stickybar';
import Home from './components/Home';
import About from './components/About';
import Strengths from './components/Strengths';

import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      {/* <Stickybar /> */}
      <Home />
      <About />
      <Strengths />

      <Footer />
    </div>
  );
}

export default App;
