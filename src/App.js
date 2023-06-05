import { Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import VolunteerList from "./components/VolunteerListComponent/VolunteerList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/volunteer/list" element={<VolunteerList />} />
        {/* <Route path="/:id"  component={MovieDetail} /> */}
      </Routes>
    </div>
  );
}

export default App;
