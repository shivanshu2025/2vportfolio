import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;