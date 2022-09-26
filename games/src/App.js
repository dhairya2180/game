import "./App.css";
// import Header from "./components/Header";
// import Image from "./components/Image";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Image /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
