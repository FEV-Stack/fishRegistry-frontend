import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage";
import Fishes from './pages/fishes';


const App = () => {
    return (
        <Router>
            <nav style={{ marginBottom: "20px" }}>
                <Link to="/">Home</Link> | <Link to="/fishes">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage title={"Welcome"} />} />
                <Route path="/fishes" element={<Fishes />} />
            </Routes>
        </Router>

    )
}
export default App;
