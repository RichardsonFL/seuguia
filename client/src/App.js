import { BrowserRouter } from 'react-router-dom';

import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer"

import "./App.css";
import RoutesMain from './routes/RoutesMain';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Main /> */}
      <RoutesMain />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
