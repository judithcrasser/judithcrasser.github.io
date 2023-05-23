import './index.css';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkList from "./components/WorkList";
import WorkDetails from "./components/WorkDetails";
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  const works = [
    {
      id: 0,
      title: "RECORD COVER",
      text: "Cover design for 'Emergency Loops' Sampler curated by Pracht e.V., 2020/2021",
      linkTitle: "Pracht Bandcamp",
      link: 'https://prachtleipzig.bandcamp.com/',
      image: require("../src/images/work-1a-cover.jpg"),
      slides: [
        { url: require("../src/images/work-1a-L.jpg") },
        { url: require("../src/images/work-1b-L.jpg") }
      ]
    },
    {
      id: 1,
      title: "TO DO LIST",
      text: "React App for listing your To Do's",
      linkTitle: "live version",
      link: 'https://judithcrasser.github.io/to-do-app/',
      image: require("../src/images/work-w1b-cover.png"),
      slides: [
        { url: require("../src/images/work-w1-L.png") },
      ]
    },
    {
      id: 2,
      title: "POSTER SERIES FM ADHOC",
      text: "Posters for event series FM ADhoc at Pracht e.V., 2019/2020",
      image: require("../src/images/work-2a-cover.jpg"),
      slides: [
        { url: require("../src/images/work-2a-L.jpg") },
        { url: require("../src/images/work-2b-L.jpg") },
        { url: require("../src/images/work-2c-L.jpg") }
      ]
    },
    {
      id: 3,
      title: "TOMATO APP",
      text: "A simple React App for listing your tomato seed collection",
      linkTitle: "github repo",
      link: 'https://judithcrasser.github.io/to-do-app/',
      image: require("../src/images/work-w2a-cover.jpg"),
      slides: [
        { url: require("../src/images/work-w2a-L.jpg") },
        { url: require("../src/images/work-w2b-L.jpg") },
        { url: require("../src/images/work-w2c-L.jpg") }
      ]
    },
    {
      id: 4,
      title: "POSTER CLUB NIGHT",
      text: "Poster for a club night at Pracht e.V. 2019",
      image: require("../src/images/work-3-cover.jpg"), 
      slides: [
        { url: require("../src/images/work-3-L.jpg") }
      ]
    },
    {
      id: 5,
      title: "NÖIX APP",
      text: "App for musicians to find band members and music collaboration partners who live in the same city",
      linkTitle: "github repo",
      link: 'https://github.com/noiix',
      linkTitle2: "live version",
      link2: 'https://make.noix.space/',
      image: require("../src/images/work-w3-cover.png"),
      slides: [
        { url: require("../src/images/work-w3a-L.png") },
        { url: require("../src/images/work-w3b-L.png") },
        { url: require("../src/images/work-w3c-L.png") },
      ]
    },
    {
      id: 6,
      title: "POSTER REOPENING",
      text: "Poster for the reopening event at Pracht e.V. 2022",
      image: require("../src/images/work-4-cover.jpg"),
      slides: [
        { url: require("../src/images/work-4-L.jpg") }
      ]
    },
    {
      id: 7,
      title: "PRACHT WEBSITE",
      text: "Website for cultural association 'Pracht e.V.' based in Leipzig East / team work",
      linkTitle: "Pracht Website",
      link: 'https://pracht-ev.net/en',
      image: require("../src/images/work-w4-cover.jpg"),
      slides: [
        { url: require("../src/images/work-w4-L.png") }
      ]
    },
    {
      id: 8,
      title: "POSTER EXCAVATION",
      text: "Video/sound work on the topic 'Excavation of archaeoacoustic objects' / scholarship project supported by Musikfonds e.V.",
      linkTitle: "video",
      link: 'https://suspicious-swanson-af0b11.netlify.app/',
      image: require("../src/images/work-5-cover.jpg"),
      slides: [
        { url: require("../src/images/work-5a-L.png") },
        { url: require("../src/images/work-5b-L.jpg") },
        { url: require("../src/images/work-5c-L.jpg") },
        { url: require("../src/images/work-5d-L.jpg") },
        { url: require("../src/images/work-5e-L.png") },
        { url: require("../src/images/work-5f-L.jpg") },
        { url: require("../src/images/work-5g-L.jpg") },
        { url: require("../src/images/work-5h-L.jpg") },
        { url: require("../src/images/work-5i-L.jpg") }
      ]
    },
    {
      id: 9,
      title: "ILLUSTRATION / BOOK COVER",
      text: "Vector drawings of lncRNA / design of a book cover for a doctoral thesis",
      image: require("../src/images/work-6-cover.png"),
      slides: [
        { url: require("../src/images/work-6a-L.jpg") },
        { url: require("../src/images/work-6b-L.png") },
        { url: require("../src/images/work-6c3-L.jpg") }
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
          <Route path='/work/*' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
