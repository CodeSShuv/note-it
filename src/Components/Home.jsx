import React from 'react'
import './Css/home.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Form from './Form'
import Note from './Note'

const Home = ({ hidden, setHidden, notes, noteInput, setNoteInput, deleteNote, writingNote, addNote, categories, NoteMode, editNote }) => {



  return (
    <div className='Home'>
      <NavBar
        hidden={hidden}
        setHidden={setHidden}
        writingNote={writingNote}
        noteInput={noteInput}

      />

      <SideBar
        hidden={hidden}
        setHidden={setHidden}

      />
      <Form
        hidden={hidden}
        setHidden={setHidden}
        noteInput={noteInput}
        setNoteInput={setNoteInput}
        writingNote={writingNote}
        addNote={addNote}
        NoteMode={NoteMode}


      />
      <div className="notes-container">

        <ul>

          {notes.length !== 0 ? notes.map((ele, index) => {

            if (categories === "All") {
              return <li key={index}><Note
                id={index}
                key={ele.heading + ele.title + ele.category}
                heading={ele.heading}
                description={ele.description}
                category={ele.category}
                deleteNote={deleteNote}
                editNote={editNote}
              /></li>
            }
            else if (categories === ele.category) {
              return <li key={index}><Note
                id={index}
                key={ele.heading + ele.title + ele.category}
                heading={ele.heading}
                description={ele.description}
                category={ele.category}
                deleteNote={deleteNote}
                editNote={editNote}
              /></li>


            }
            return ""

          }) : <p>No notes to show</p>}






        </ul>
      </div>

    </div>
  )
}

export default Home