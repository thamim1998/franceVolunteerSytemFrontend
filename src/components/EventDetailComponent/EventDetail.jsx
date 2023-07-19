import React from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./EventDetail.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiTimeTrap } from "react-icons/gi";

function VolunteerDetail() {
  return (
    <div className="event-detail">
      <div>
        <SidebarComponent />
      </div>
      <div className="detail-content">
        <div className="container">
          <h4 className="pt-4">
            Solidtary event Delivery Driver paris provided
          </h4>
          <h4 className=" pb-4">EVENT ID: &nbsp;&nbsp; #1234567</h4>
          <div className="row desire mt-2">
            <p className="pt-3">Posted on 06/10/2023</p>
            <h6 className="pt-2 pb-3">Description de la mission</h6>
            <div className="col-8">
              <p>
                I work as a Delivery Driver for the Super Chapelle solidarity
                grocery store - Paris 18 in order to collect the goods.
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <p>
                  {" "}
                  <b>Type de mission:</b> Chauffer{" "}
                </p>
              </div>
              <div className="col-4">
                <p>
                  <b>Status:</b> Open
                </p>
              </div>
            </div>
          </div>
          <div className="row desire mt-2">
            <div className="col-4">
              <h6 className="pt-2 pb-3">Needed Professional</h6>
              <ol>
                <li>Olympic Paris 2024</li>
                <li>Environment</li>
                <li>Education-Training-School support</li>
              </ol>
            </div>
            <div className="col-6">
              <h6 className="pt-2 pb-3">Other information required</h6>
              <ol>
                <li>Olympic Paris 2024</li>
                <li>Environment</li>
                <li>Education-Training-School support</li>
              </ol>
            </div>
          </div>
          <div className="row desire mt-2">
            <h6 className="pt-2 pb-3">Address and Date Time</h6>
            <div className="col-6">
              <p>
                {" "}
                <span className="pt-3 pb-5">
                  <HiOutlineLocationMarker size={25} />
                </span>{" "}
                63 RUE DE LA CHAPELLE, 75018 PARIS, France
              </p>
              <p>
                {" "}
                <span className="pt-3 pb-5">
                  <AiOutlineCalendar size={25} />
                </span>{" "}
                From 01/10/2023 to 01/11/2023
              </p>
              <p>
                {" "}
                <span className="pt-3 pb-5">
                  <GiTimeTrap size={25} />
                </span>{" "}
                Needed time: weekdays
              </p>
            </div>
            <div className="col-6">
              <p>Slot remaining: 85</p>
              <p>Volunteer applied: 94270</p>
              <p>Points: 200</p>
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
