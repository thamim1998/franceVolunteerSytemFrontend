import React, { useState } from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./CreateEvent.css";

function CreateEvent() {
  const [description, setDescription] = useState("");
  const [professionals, setProfessionals] = useState("");
  const [information, setInformation] = useState("");
  const [address, setAddress] = useState("");
  const [slot, setSlot] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [points, setPoints] = useState("");
  const [needTime, setNeedtime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Username:", username);

    // setEmail("");
    // setPassword("");
    // setUsername("");
  };

  return (
    <div className="create-event">
      <div>
        <SidebarComponent />
      </div>
      <div className="container">
        <div className="event-form mt-4">
          <h4>Create Event</h4>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-content mt-2">
            <h6>
              Description <br />
              <span>
                ( max 2000 <br /> characters )
              </span>
            </h6>
            <input
              type="text"
              value={description}
              className="input-email"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-content mt-4">
            <h6>
              Needed <br /> professional <br />
              <span>
                ( max 2000 <br /> characters )
              </span>
            </h6>
            <input
              type="text"
              value={professionals}
              className="input-email"
              onChange={(e) => setProfessionals(e.target.value)}
              required
            />
          </div>
          <div className="form-content mt-4">
            <h6>
              Other <br /> information <br />
              required <br />
              <span>
                ( max 2000 <br /> characters )
              </span>
            </h6>
            <input
              type="text"
              value={information}
              className="input-email"
              onChange={(e) => setInformation(e.target.value)}
              required
            />
          </div>
          <div className="form-details mt-4">
            <div className="d-flex">
              <h6 className="p-2">Address</h6>
              <input
                type="text"
                value={address}
                className="input-address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="d-flex slot">
              <h6 className="p-2">Total slots </h6>
              <input
                type="text"
                value={slot}
                className="input-slot"
                onChange={(e) => setSlot(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-date mt-4">
            <div className="d-flex ">
              <h6 className="p-3">From date </h6>
              <input
                type="date"
                value={startDate}
                className="input-date start-date"
                onChange={(e) => setStartdate(e.target.value)}
                required
              />
            </div>
            <div className="d-flex end-date">
              <h6 className="p-3">To date </h6>
              <input
                type="date"
                value={endDate}
                className="input-date"
                onChange={(e) => setEnddate(e.target.value)}
                required
              />
            </div>
            <div className="d-flex points">
              <h6 className="p-3">Points </h6>
              <input
                type="text"
                value={points}
                className="input-points"
                onChange={(e) => setPoints(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-flex">
            <h6 className="p-3">Needed time</h6>
            <input
              type="text"
              value={needTime}
              className="input-time"
              onChange={(e) => setNeedtime(e.target.value)}
              required
            />
          </div>
          <div className="button">
            <button className="create-button mt-2">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
