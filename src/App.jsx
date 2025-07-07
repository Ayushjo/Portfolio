import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
