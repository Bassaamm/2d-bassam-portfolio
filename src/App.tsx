import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="tools" element={<Tools />} />
      <Route path="contact-me" element={<ContactMe />} />
    </Routes>
  );
}

export default App;
