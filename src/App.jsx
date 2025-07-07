import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";


// Main App Component

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
