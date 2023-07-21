import { Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccountComponent/CreateAccount";
import CreateEvent from "./components/CreateEventComponent/CreateEvent";
import EventDetail from "./components/EventDetailComponent/EventDetail";
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
        <Route path="/event/list/:id"  element={<EventDetail/>} />
        <Route path="/create/account"  element={<CreateAccount/>} />
        <Route path="/create/event"  element={<CreateEvent/>} />
      </Routes>
    </div>
  );
}

export default App;
