import React from 'react'
import { Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import Header from './Components/Header';
import AboutPage from "./Components/AboutPage";
import PlantRequestPage from "./Components/PlantRequestPage";

function App() {
  return (
    <div className="app">
      <div>
      <NavBar />
      <Header />
      </div>
      
      <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/AboutPage" element={<AboutPage></AboutPage>} />
      <Route path="/plantform" element={<PlantRequestPage></PlantRequestPage>} />
    </Routes>
    </div>
  );
}

export default App;


