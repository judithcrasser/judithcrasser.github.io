import './index.css';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkList from "./components/WorkList";
import WorkDetails from "./components/WorkDetails";
import { Route, Routes } from 'react-router-dom';
// import WorkDetails from './components/WorkDetails';

function App() {

  const works = [
    {
      id: 0,
      title: "RECORD COVER",
      text: "Record Cover Text",
      image: require("../src/images/work-1a.jpg"),
      slides: [
        { url: require("../src/images/work-1a.jpg") },
        { url: require("../src/images/work-1b.jpg") }
      ]
    },
    {
      id: 1,
      title: "TO DO LIST",
      text: "To Do List Text",
      image: require("../src/images/work-w1b.png"),
      slides: [
        { url: require("../src/images/work-w1.png") },
      ]
    },
    {
      id: 2,
      title: "POSTER SERIES FM ADHOC",
      text: "Text Poster FM ADhoc Pracht e.V.",
      image: require("../src/images/work-2a.jpg"),
      slides: [
        { url: require("../src/images/work-2a.jpg") },
        { url: require("../src/images/work-2b.jpg") },
        { url: require("../src/images/work-2c.jpg") }
      ]
    },
    {
      id: 3,
      title: "TOMATO COLLECTION APP",
      text: "Text Tomato App",
      image: require("../src/images/work-w2a.jpeg"),
      slides: [
        { url: require("../src/images/work-w2a.jpeg") },
        { url: require("../src/images/work-w2b.jpeg") },
        { url: require("../src/images/work-w2c.jpeg") }
      ]
    },
    {
      id: 4,
      title: "POSTER CLUB NIGHT",
      text: "Text Club Night Poster",
      image: require("../src/images/work-3.jpg"), 
      slides: [
        { url: require("../src/images/work-3.jpg") }
      ]
    },
    {
      id: 5,
      title: "NÖIX APP",
      text: "Text Nöix App",
      image: require("../src/images/work-w3-cover.png"),
      slides: [
        { url: require("../src/images/work-w3a.jpg") },
        { url: require("../src/images/work-w3b.jpg") },
        { url: require("../src/images/work-w3c.jpg") },
      ]
    },
    {
      id: 6,
      title: "POSTER REOPENING",
      text: "Text Reopening Poster",
      image: require("../src/images/work-4.jpg"),
      slides: [
        { url: require("../src/images/work-4.jpg") }
      ]
    },
    {
      id: 7,
      title: "PRACHT HOMEPAGE",
      text: "Text Pracht Homepage",
      image: require("../src/images/work-w4.png"),
      slides: [
        { url: require("../src/images/work-w4.png") }
      ]
    },
    {
      id: 8,
      title: "POSTER EXCAVATION",
      text: "Text Excavation Poster",
      image: require("../src/images/work-5.jpg"),
      slides: [
        { url: require("../src/images/work-5.jpg") },
        { url: require("../src/images/work-5b.jpg") },
        { url: require("../src/images/work-5c.jpg") }
      ]
    },
    {
      id: 9,
      title: "MEDICAL ILLUSTRATION / BOOK COVER",
      text: "Text Medical Illustration",
      image: require("../src/images/work-6-cover.png"),
      slides: [
        { url: require("../src/images/work-6a.jpg") },
        { url: require("../src/images/work-6b.png") },
        { url: require("../src/images/work-6c2.jpg") }
      ]
    },
  ];



  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/work' element={<WorkList works={works} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/work/:id' element={<WorkDetails works={works} />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
        {/* <WorkDetails /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
