import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Styles from "./components/Styles";
import Artists from './components/Artists'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
