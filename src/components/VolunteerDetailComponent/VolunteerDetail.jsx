import React from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./VolunteerDetail.css";

function VolunteerDetail() {
  return (
    <div className="volunteer-detail">
      <div>
        <SidebarComponent />
      </div>
      <div className="detail-content">
        <div className="container">
          <h4 className="pt-4 pb-4">Guy Hawkins 1234567</h4>
          <div className="row profile">
            <h6 className="pt-2 pb-3">PROFILE</h6>
            <div className="col-4">
              <p>First name: Hawkin</p>
              <p>Last name: Guy</p>
              <p>Year of birth: 1998</p>
            </div>
            <div className="col-4">
              <p>Address: 85 Avenue de Fontainebleau, Le Kremlin Bicetre</p>
              <p>Postal code: 94270</p>
              <p>Country: France</p>
            </div>
            <div className="col-4">
              <p>Email: thamim1997@gmail.com</p>
              <p>Phone number: 07 45 711 753</p>
            </div>
          </div>
          <div className="row desire mt-2">
            <h6 className="pt-2 pb-3">DESIRES</h6>
            <div className="col-4">
              <p>Action areas:</p>

              <ol>
                <li>Olympic Paris 2024</li>
                <li>Environment</li>
                <li>Education-Training-School support</li>
              </ol>
            </div>
            <div className="col-4">
              <p>Mission Types</p>

              <ol>
                <li>Support (Social and Professional)</li>
                <li>Communication</li>
              </ol>
            </div>
            <div className="col-4">
              <p>Availabilities</p>

              <ol>
                <li>Weekend during day</li>
                <li>Weekend during day</li>
                <li>Evening school holidays</li>
              </ol>
            </div>
          </div>
          <div className="row desire mt-2">
            <h6 className="pt-2 pb-3">SITUATION</h6>
            <div className="col-4">
              <p>Professional situation:&nbsp;&nbsp; Student or school</p>
              <p>Possible displacement: &nbsp;&nbsp; 0 - 100 km</p>
              <p>Travel type: &nbsp;&nbsp; By public transportation</p>
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
