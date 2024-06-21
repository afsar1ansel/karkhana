import React, { useState } from "react";
import edit from "../assets/edit.svg";

const btn = {
  backgroundColor: "skyblue",
};

const body = {
  padding: " 0px 30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin:"auto",
  height: "50px",
  marginTop: "40px",
  backgroundColor: "rgb(245, 244, 242)",
  width: "80%",
};

const containt = {
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
  width: "80%",
  backgroundColor: "rgb(245, 244, 242)",
};

const int = {
  width: "80%",
  height: "40px",
  border: "none",
  outline: "none",
  padding: "0 20px",
  fontSize: "15px",
  // display: inline-block;
  borderRadius: " 5px 0 0 5px",
};

function DisplayName() {
  const [name, setName] = useState("Jimmy Sullivan");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={body}>
      {isEditing ? (
        <div style={containt}>
          <input
            style={int}
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <button style={btn} onClick={handleSaveClick}>
            <img src={edit} alt="" />
          </button>
        </div>
      ) : (
        <div style={containt}>
          <span>{name}</span>
          <button style={btn} onClick={handleEditClick}>
            <img src={edit} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default DisplayName;
