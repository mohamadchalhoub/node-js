import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
