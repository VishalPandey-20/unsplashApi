
import './app.css'
import HomePage from './components/HomePage';
import SearchPhoto from './components/SearchPhoto';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/explore' element={<SearchPhoto />} />
        </Routes>
      </BrowserRouter>
      {/* <ScrollToTop /> */}
      <Loader />
    </>
  );
}

export default App;
