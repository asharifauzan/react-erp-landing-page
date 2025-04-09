import { Routes, Route } from "react-router";
import Root from "./pages/Root";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
