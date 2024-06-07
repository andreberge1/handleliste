import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

import './App.css';
import NewListPage from "./Pages/NewListPage/NewListPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newlist" element={<NewListPage />} />
        </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;
