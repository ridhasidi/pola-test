import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateForm from "./pages/CreateFormPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-form" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
