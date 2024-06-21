import "./Search.css"
import filter from "../assets/filter.svg"

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
          <input type="text" placeholder="Search all product here... " />
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
          <img src={filter} alt="filter" />
        </div>
      </div>
    );
}

export default Search