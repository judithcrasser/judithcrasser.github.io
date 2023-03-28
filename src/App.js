import './index.css';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkList from "./components/WorkList";
import { Route, Routes } from 'react-router-dom';
// import WorkDetails from './components/WorkDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/work' element={<WorkList />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='*' element={<NotFound />}/> */}
        </Routes>
        {/* <WorkDetails /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
