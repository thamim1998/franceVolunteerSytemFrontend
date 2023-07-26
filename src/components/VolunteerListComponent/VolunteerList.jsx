import React, { useState } from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import { GrSearchAdvanced } from "react-icons/gr";
import "./VolunteerList.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import user_data from "../../utils/volunteerData";

function VolunteerList() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;

  const pagesVisited = pageNumber * usersPerPage;

  
  const displayUsers = user_data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((data, i) => (
      <tr key={i}>
        <td className="volunteer-name">
          <Link to={`/volunteer/list/${data.volunteerId}`}>{data.firstName + " " + data.lastName}</Link>
        </td>
        <td>{data.email}</td>
        <td>{data.phone_number}</td>
        <td>{data.skills}</td>
        <td>{data.volunteerId}</td>
      </tr>
    ));

  const pageCount = Math.ceil(user_data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
      <div className="container list">
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
            <tbody>{displayUsers}</tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default VolunteerList;
