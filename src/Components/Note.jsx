import React from 'react'
import "./Css/note.css"
const Note = ({ heading, description, category, id, deleteNote, editNote }) => {
  return (
    <div className='note'>
      <header>
        <button title={id} onClick={editNote}>Edit</button>
        <button title={id} onClick={deleteNote}>X</button>
      </header>
      <div className="note-category">
        <span>{category}</span>
      </div>
      <div className="note-heading">
        <h3>{heading}</h3>
      </div>
      <div className="note-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Note