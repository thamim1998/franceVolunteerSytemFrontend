import React from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./VolunteerDetail.css";
import user_data from "../../utils/volunteerData";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function VolunteerDetail() {
  const { id } = useParams();
  const userDetails = user_data.find((data) => data.volunteerId === id);
  useEffect(() => {
    console.log("id", userDetails);
  }, []);

  return (
    <div className="volunteer-detail">
      <div>
        <SidebarComponent />
      </div>
      <div className="detail-content">
        <div className="container">
          <h4 className="pt-4 pb-4">
            {" "}
            {userDetails.firstName +
              " " +
              userDetails.lastName +
              " " +
              userDetails.volunteerId}{" "}
          </h4>
          <div className="row profile">
            <h6 className="pt-2 pb-3">PROFILE</h6>
            <div className="col-4">
              <p>First name: {userDetails.firstName}</p>
              <p>Last name: {userDetails.lastName}</p>
              <p>Year of birth: 1998</p>
            </div>
            <div className="col-4">
              <p>Address: {userDetails.address}</p>
              <p>Postal code: {userDetails.postalCode}</p>
              <p>Country: {userDetails.country}</p>
            </div>
            <div className="col-4">
              <p>Email: {userDetails.email}</p>
              <p>Phone number: {userDetails.phone_number}</p>
            </div>
          </div>
          <div className="row desire mt-2">
            <h6 className="pt-2 pb-3">DESIRES</h6>
            <div className="col-4">
              <p>Action areas:</p>
              <ol>
                {userDetails.actionArea.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ol>
            </div>
            <div className="col-4">
              <p>Mission Types</p>

              <ol>
                {userDetails.missionType.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ol>
            </div>
            <div className="col-4">
              <p>Availabilities</p>

              <ol>
                {userDetails.availablity.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="row desire mt-2">
            <h6 className="pt-2 pb-3">SITUATION</h6>
            <div className="col-4">
              <p>
                Professional situation:&nbsp;&nbsp;{" "}
                {userDetails.professionalSituation}
              </p>
              <p>
                Possible displacement: &nbsp;&nbsp;
                {userDetails.possibleDisplacement}
              </p>
              <p>Travel type: &nbsp;&nbsp; {userDetails.travelType}</p>
            </div>
            <div className="col-6">
              <p>
                More detail: can perform the following tasks: English and German
                speaking guides, support for sports tournaments
              </p>
            </div>
          </div>
          <div className="button-approve mt-5">
            <button type="button" className="btn btn-primary approve">
              Approve
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
