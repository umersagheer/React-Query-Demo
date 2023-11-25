import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SuperHeroes from "./components/SuperHeroes";
import RQSuperHeroes from "./components/RQSuperHeroes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" exact element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
      </Routes>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom-left"
        panel-position="right"
      />
    </>
  );
}

export default App;
