import "./App.css";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./components/WelcomePage";
import { Question } from "./components/Question";
import { Answer } from "./components/Answer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </>
  );
}

export default App;
