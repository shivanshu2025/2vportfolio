import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import AppLoader from "./components/LiquidLoader/AppLoader"; 

function App() {
  return (
    <AppLoader>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </AppLoader>
  );
}

export default App;