import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer"

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
