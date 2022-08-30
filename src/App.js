import "./App.css";
import Challenge1 from "./components/challenge1/challenge1";
import Challenge2 from "./components/challenge2/challenge2";
import Challenge3 from "./components/challenge3/challege3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{marginTop:'70px'}}></div>
        <Routes>
          <Route path="/challenge1" element={<Challenge1 />} />
          <Route path="/challenge2" element={<Challenge2 />} />
          <Route path="/challenge3" element={<Challenge3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
