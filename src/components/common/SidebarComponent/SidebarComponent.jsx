import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import {
  MdOutlineEventNote,
  MdOutlineAccountCircle,
  MdPassword,
} from "react-icons/md";
import "./SidebarComponent.css";
import { Link } from "react-router-dom";
import MyImage from "../SidebarComponent/AiMy.jpeg";

function SidebarComponent() {
  return (
    <div className="sidebar">
      <div>
        <h5 className="p-3">France Volunteer</h5>
        <img src={MyImage} className="volunteer-img p-2" alt="img" />
        <h5 className="pt-2 pb-2">Ai my Luong</h5>
        <h5 className="pb-2">Admin</h5>
        <hr className="horizontal-line" />
      </div>
      <div>
        <ul className="menu-list">
          <div className="pt-1 pb-1">
            <li>
              <AiFillHome size={25} />{" "}
              <h5 className="list-text">
                {" "}
                <Link to="/home">Home</Link>
              </h5>
            </li>
          </div>
          <div className="pt-1 pb-1">
            <li>
              <FaList size={25} />{" "}
              <h5 className="list-text">
                <Link to="/volunteer/list">Volunteer list</Link>
              </h5>
            </li>
          </div>
          {/* <div className="pt-1 pb-1">
            <li>
              <TbListDetails size={25} />{" "}
              <h5 className="list-text">
                <Link to="#react">Volunteer detail</Link>
              </h5>
            </li>
          </div>{" "} */}
          <div className="pt-1 pb-1">
            <li>
              <FaList size={25} />{" "}
              <h5 className="list-text">
                <Link to="/event/list">Event list</Link>
              </h5>
            </li>
          </div>{" "}
          {/* <div className="pt-1 pb-1">
            <li>
              <TbListDetails size={25} />{" "}
              <h5 className="list-text">
                <Link to="#react">Event detail</Link>
              </h5>
            </li>
          </div>{" "} */}
          <div className="pt-1 pb-1">
            <li>
              <MdOutlineEventNote size={25} />{" "}
              <h5 className="list-text">
                <Link to="/create/event">Create event</Link>
              </h5>
            </li>
          </div>{" "}
          <div className="pt-1 pb-1">
            <li>
              <MdOutlineAccountCircle size={25} />{" "}
              <h5 className="list-text">
                <Link to="/create/account">Create account</Link>
              </h5>
            </li>
          </div>
          <div className="pt-1 pb-1">
            <li>
              <MdPassword size={25} />{" "}
              <h5 className="list-text">
                <Link to="#react">Change password</Link>
              </h5>
            </li>
          </div>
          <div className="pt-1 pb-1">
            <li>
              <TbLogout size={25} />{" "}
              <h5 className="list-text">
                <Link to="#react">Sign out</Link>
              </h5>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SidebarComponent;
