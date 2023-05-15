import { Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
