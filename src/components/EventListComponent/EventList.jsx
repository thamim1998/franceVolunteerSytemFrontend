import React,{useState} from "react";
import SidebarComponent from "../common/SidebarComponent/SidebarComponent";
import { GrSearchAdvanced } from "react-icons/gr";
import "./EventList.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { GiTimeTrap } from "react-icons/gi";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import event_list from "../../utils/eventData";


export default function EventList() {

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;

  const pagesVisited = pageNumber * usersPerPage;

  const displayEvents = event_list
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((list, i) => (
    <div key={i}>
      <h4>{list.event_name}</h4>
      <div className="row">
        <div className="col-4">
          <p>Type de mission: {list.typeofmission}</p>
        </div>
        <div className="col-4">
          <p>
            <span>
              <AiOutlineCalendar size={25} />
            </span>
            From {list.start_date}
          </p>
        </div>
        <div className="col-4">
          <button className=" btn btn-secondary detail-button">
            <Link to={`/event/list/${list.eventId}`}>Detail</Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p>
            <span className="pt-3 pb-5">
              <HiOutlineLocationMarker size={25} />
            </span>
            {list.address}
          </p>
        </div>
        <div className="col-4">
          <p>          
            <span>
              <GiTimeTrap size={25} />
            </span>
            {list.is_regular}
          </p>
        </div>
      </div>
      <hr />
    </div>
  ))

  const pageCount = Math.ceil(event_list.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <div className="event-list">
      <div>
        <SidebarComponent />
      </div>
      <div className="container list">
        <h4 className="mt-4 mb-4 event-header">Event List</h4>
        <div className="search-bar pt-4 pb-3">
          <p> Search by</p>
          <input
            type="text"
            className="search-name"
            // value={input1}
            // onChange={handleInputChange1}
            placeholder="name"
          />
          <br />
          <input
            type="date"
            className="start-date"
            // value={input2}
            // onChange={handleInputChange2}
            // placeholder="start-date"
          />
          <br />
          <input
            type="date"
            className="end-date"
            // value={input2}
            // onChange={handleInputChange2}
            // placeholder="end-date"
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
            // value={input2}
            // onChange={handleInputChange2}
            placeholder="Search"
            id="search-volunteer"
          />

          <span>
            <GrSearchAdvanced className="icon" size={20} />
          </span>
        </div>
        <div className="event-table pt-4">
          {displayEvents}
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
