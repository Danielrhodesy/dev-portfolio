import logo from './logo.svg';
import './App.css';
import './views/HomePage';
import HomePage from './views/HomePage';
import Nav from './views/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./views/Content";
import Contact from "./views/Contact";
import About from "./views/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/content" element={<Content />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

{/* <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="content" element={<Content />} />
  <Route path="contact" element={<Contact />} />
  <Route path="about" element={<About />} />
</Routes> */}