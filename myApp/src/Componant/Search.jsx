import "./Search.css";
import filter1 from "../assets/fileter1.svg";
import { useContext } from "react";
import { myContext } from "../Context/Context";

function Search() {

  return (
    <div
      style={{
        backgroundColor: "rgb(245, 244, 242)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
      }}
    >
      <div className="search">
        <input
          type="text"
          placeholder="Search all products here..."
          // onChange={handleSearch}
        />
        <button>Search</button>
      </div>
      <div
        style={{
          cursor: "pointer",
          height: "30px",
          width: "30px",
          backgroundColor: "white",
        }}
      >
        <img src={filter1} alt="filter" />
      </div>
    </div>
  );
}

export default Search;
