import React from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import "./HomeComponent.css";

export default function HomeComponent() {
  return (
    <div className="home-container">
        <SidebarComponent/>
        <div className="content">
            <p>Home component</p>
        </div>
    </div>
  );
}
