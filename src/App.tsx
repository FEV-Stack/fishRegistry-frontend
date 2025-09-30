import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage";
import Fishes from './pages/fishes';


const App = () => {
    return (
        <Router>
            <nav style={{ margin: "20px" }}>
                <Link to="/">Hjemhavn</Link> | <Link to="/fishes">Fiskeregisteret</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage title={"Velkommen til Fisken"} />} />
                <Route path="/fishes" element={<Fishes />} />
            </Routes>
        </Router>

    )
}
export default App;
