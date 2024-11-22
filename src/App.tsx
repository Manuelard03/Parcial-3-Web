import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";

const poems = [
  { id: "1", title: "The Road Not Taken", excerpt: "Two roads diverged in a yellow wood" },
  { id: "2", title: "Ozymandias", excerpt: "I met a traveler from an antique land" },
  { id: "3", title: "Daffodils", excerpt: "I wandered lonely as a cloud" },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard poems={poems} />} />
        <Route path="/poem/:id" element={<Detail />} />
        <Route path="/create-poem" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
