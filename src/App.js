import HomePage from './views/HomePage';
import Nav from './views/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./views/Contact";
import About from "./views/About";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    width: 80rem;
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
            {/* </Route> */}
          </Routes>
        </Main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
