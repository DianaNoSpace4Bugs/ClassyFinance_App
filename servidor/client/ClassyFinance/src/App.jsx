import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
