import React, { useState } from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";

import { GrSearchAdvanced } from "react-icons/gr";

import "./VolunteerList.css";

function VolunteerList() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };
  return (
    <div className="volunteer-list">
      <div>
        <SidebarComponent />
      </div>
      <div className="list">
        <h4 className="mt-4 mb-4">Volunteer List</h4>
        <div className="search-bar pt-4 pb-3">
          <p> Search by</p>
          <input
            type="text"
            className="search-name"
            value={input1}
            onChange={handleInputChange1}
            placeholder="name"
          />
          <br />
          <input
            type="text"
            className="search-email"
            value={input2}
            onChange={handleInputChange2}
            placeholder="email"
          />
          <br />
          <input
            type="text"
            className="search-id"
            value={input2}
            onChange={handleInputChange2}
            placeholder="volunteer-id"
          />
          <br />
  
          <select name="pets" id="pet-select">
            <option value="">status</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>

          <input
            type="text"
            className="search"
            value={input2}
            onChange={handleInputChange2}
            placeholder="Search"
            id="search-volunteer"
          />

          <span>
            <GrSearchAdvanced className="icon" size={20} />
          </span>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Skills</th>
                <th scope="col">ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td  className="volunteer-name">Ai My Luong</td>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr>
              <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr>
              <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr> <tr>
                <th scope="row" className="volunteer-name">Ai My Luong</th>
                <td>aimy123@gmail.com</td>
                <td>+33745711753</td>
                <td>Education, English, IT</td>
                <td>1234567</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VolunteerList;
