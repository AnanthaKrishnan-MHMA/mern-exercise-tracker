import './App.css'
import CreateExercise from "./components/exercises/create/CreateExercise";
import EditExercise from "./components/exercises/edit/EditExercise";
import ShowExercise from "./components/exercises/show/ShowExercise";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowExercise />} />
          <Route path="/create-exercise" element={<CreateExercise />} />
          <Route path="/edit-exercises/:id" element={<EditExercise />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
