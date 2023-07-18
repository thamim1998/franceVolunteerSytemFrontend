import { Route, Routes } from "react-router-dom";
import EventList from "./components/EventListComponent/EventList";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import VolunteerDetail from "./components/VolunteerDetailComponent/VolunteerDetail";
import VolunteerList from "./components/VolunteerListComponent/VolunteerList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/volunteer/list" element={<VolunteerList />} />
        <Route path="/volunteer/list/:id"  element={<VolunteerDetail/>} />
        <Route path="/event/list"  element={<EventList/>} />
      </Routes>
    </div>
  );
}

export default App;
