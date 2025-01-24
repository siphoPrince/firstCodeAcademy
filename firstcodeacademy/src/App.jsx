import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Elearning from "./pages/Elearning";

function App() {
   

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Elearning" element={<Elearning />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
