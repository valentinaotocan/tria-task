import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RandomList from "./pages/RandomList";
import Waves from "./components/Waves";
function App() {
  return (
    <>
      <Waves rotate={180}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-list" element={<RandomList />} />
      </Routes>
      <Waves rotate={0}/>
    </>
  );
}

export default App;
