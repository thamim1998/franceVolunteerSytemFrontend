import React from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./EventDetail.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiTimeTrap } from "react-icons/gi";
import { useParams } from "react-router-dom";
import event_list from "../../utils/eventData";
import { useEffect } from "react";

function VolunteerDetail() {
  const { id } = useParams();
  const eventDetails = event_list.find((data) => data.eventId === id);

  useEffect(()=>{
    console.log("EVENT", eventDetails);
  })

  return (
    <div className="event-detail">
      <div>
        <SidebarComponent />
      </div>
      <div className="detail-content">
        <div className="container">
          <h4 className="pt-4">
          {eventDetails.event_name}
          </h4>
          <h4 className=" pb-4">EVENT ID: &nbsp;&nbsp; #{eventDetails.eventId}</h4>
          <div className="row desire mt-2">
            <p className="pt-3">Posted on {eventDetails.postedOn}</p>
            <h6 className="pt-2 pb-3">Description de la mission</h6>
            <div className="col-8">
              <p>
                {eventDetails.misssionDescription}.
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <p>
                  
                  <b>Type de mission:</b> {eventDetails.typeofmission}
                </p>
              </div>
              <div className="col-4">
                <p>
                  <b>Status:</b> {eventDetails.status}
                </p>
              </div>
            </div>
          </div>
          <div className="row desire mt-2">
            <div className="col-4">
              <h6 className="pt-2 pb-3">Needed Professional</h6>
              <ol>
                {eventDetails.neededProfessional.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ol>
            </div>
            <div className="col-6">
              <h6 className="pt-2 pb-3">Other information required</h6>
              <ol>
                {eventDetails.otherInformation.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="row desire mt-2">
            <h6 className="pt-2 pb-3">Address and Date Time</h6>
            <div className="col-6">
              <p>
                <span className="pt-3 pb-5">
                  <HiOutlineLocationMarker size={25} />
                </span>
               {eventDetails.address}
              </p>
              <p>                
                <span className="pt-3 pb-5">
                  <AiOutlineCalendar size={25} />
                </span>
                From {eventDetails.start_date} to {eventDetails.end_date}
              </p>
              <p>                
                <span className="pt-3 pb-5">
                  <GiTimeTrap size={25} />
                </span>
                Needed time: {eventDetails.neededTime}
              </p>
            </div>
            <div className="col-6">
              <p>Slot remaining: {eventDetails.slotRemaining}</p>
              <p>Volunteer applied: {eventDetails.volunteerApplied}</p>
              <p>Points: {eventDetails.points}</p>
            </div>
          </div>
          <div className="button-approve mt-5">
            <button type="button" className="btn btn-primary approve">
              Edit
            </button>
            <button type="button" className="btn btn-primary approve">
              Active
            </button>
            <button type="button" className="btn btn-secondary inactive">
              Inactive
            </button>
            <button type="button" className="btn btn-danger delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDetail;
