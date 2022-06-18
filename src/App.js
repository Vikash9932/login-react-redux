import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
