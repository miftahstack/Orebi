import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop";

// Main App Component

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
