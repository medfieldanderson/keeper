import React, { useState } from "react";
import { Zoom, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  
  const expand = () => {
    setIsEditMode(true);
  };

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsEditMode(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          style={{display: isEditMode ? 'block' : 'none'}}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isEditMode ? 3 : 1}
        />
        <Zoom in={isEditMode}>
          <Fab onClick={submitNote}>
            <AddIcon fontSize="large" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
