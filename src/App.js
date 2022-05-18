import HomePage from './views/HomePage'; 
import Nav from './views/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./views/Contact";
import About from "./views/About";
import Project from './views/Project';
import styled from "styled-components";
import { devices } from "./tokens/breakpointSizes";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    margin: 0 5rem 0 5rem;
    width: 90rem;
    max-width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav/>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
          </Routes>
        </Main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
