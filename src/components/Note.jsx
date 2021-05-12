import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick = {() =>{

        props.onchange(props.id);

      }}>Remove</button>
    </div>
  );
}

export default Note;
