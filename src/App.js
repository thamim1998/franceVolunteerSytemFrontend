import { Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccountComponent/CreateAccount";
import CreateEvent from "./components/CreateEventComponent/CreateEvent";
import EventDetail from "./components/EventDetailComponent/EventDetail";
import EventList from "./components/EventListComponent/EventList";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import VolunteerDetail from "./components/VolunteerDetailComponent/VolunteerDetail";
import VolunteerList from "./components/VolunteerListComponent/VolunteerList";
import { AuthProvider } from "./utils/Auth";
import { RequireAuth } from "./utils/RequireAuth";

function App() {
  return (
    <div className="App">
  <AuthProvider>
  <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/volunteer/list" element={<RequireAuth><VolunteerList /></RequireAuth> } />
        <Route path="/volunteer/list/:id"  element={<RequireAuth><VolunteerDetail /></RequireAuth> } />
        <Route path="/event/list"  element={<RequireAuth><EventList /></RequireAuth> } />
        <Route path="/event/list/:id"  element={<RequireAuth><EventDetail /></RequireAuth> } />
        <Route path="/create/account"  element={<RequireAuth><CreateAccount /></RequireAuth> } />
        <Route path="/create/event"  element={<RequireAuth><CreateEvent /></RequireAuth> } />
      </Routes>
  </AuthProvider>
    </div>
  );
}

export default App;
