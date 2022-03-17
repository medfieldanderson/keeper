import React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} tooltip="Delete">
        <DeleteForeverIcon fontSize="large" />
      </button>
    </div>
  );
}

export default Note;
