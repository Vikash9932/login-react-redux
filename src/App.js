import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

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
