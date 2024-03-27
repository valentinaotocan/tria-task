import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RandomList from "./pages/RandomList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-list" element={<RandomList />} />
      </Routes>
    </>
  );
}

export default App;
