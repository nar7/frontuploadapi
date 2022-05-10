import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Uploads from "./pages/Uploads";

function App() {
  return (
    <div className="container ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Uploads />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
