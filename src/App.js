import logo from './logo.svg';
import './App.css';
import './views/HomePage';
import HomePage from './views/HomePage';
import Nav from './views/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./views/Content";
import Contact from "./views/Contact";
import About from "./views/About";
import styled from "styled-components";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    // background-color: red;
    width: 80rem;
`;

const TestDiv = styled.div`
  background-color: blue;
  height: 40rem;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <Container>
        <Nav/>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/content" element={<Content />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Content />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Content />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Content />
          </AnimationOnScroll>
        </Main>
      </Container>
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