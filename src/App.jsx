import React, { useState, useEffect } from 'react'
import "./App.css"
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  const [hidden, setHidden] = useState({
    sidebar: true,
    noteItBox: true
  });
  const [noteInput, setNoteInput] = useState({
    id: "",
    headingValue: "",
    descriptionValue: "",
    categoryValue: "",

  })
  const [notes, setNotes] = useState([
    {
      id: 0,
      heading: "Create Your Own Note",
      description: "Compose your Note",
      category: "Personal"
    }
  ]);
  const [NoteMode, setNoteMode] = useState("Note It");
  const deleteNote = (e) => {
    const newNotes = notes.filter((ele, index) => {

      if (parseInt(e.target.title) === index) {
        return "";
      } return ele

    })
    setNotes(newNotes)
  }


  const editNote = (e) => {

    setNoteInput({
      id: notes[parseInt(e.target.title)].id,
      headingValue: notes[parseInt(e.target.title)].heading,
      descriptionValue: notes[parseInt(e.target.title)].description,
      categoryValue: notes[parseInt(e.target.title)].category
    })
    console.log(notes[parseInt(e.target.title)].category)
    setHidden({
      sidebar: true,
      noteItBox: false
    })
    setNoteMode("Edit It")
  }
  //Used in form.jsx to enter a new Note
  const writingNote = (e) => {


    setNoteInput({
      id: NoteMode === "Edit It" ? noteInput.id : noteInput.length,
      headingValue: e.target.id === "heading" ? e.target.value : noteInput.headingValue,
      descriptionValue: e.target.id === "Description" ? e.target.value : noteInput.descriptionValue,
      categoryValue: e.target.id === "notecategory" ? e.target.value : noteInput.categoryValue,

    })
  }

  // btn to add new note
  const addNote = () => {

    if (NoteMode === "Note It") {
      const newNote = {
        id: notes.length,
        heading: noteInput.headingValue === "" ? "(Untitled)" : noteInput.headingValue,
        description: noteInput.descriptionValue === "" ? "(Untitled)" : noteInput.descriptionValue,
        category: noteInput.categoryValue
      }
      setNotes((currentArray) => { return [...currentArray, newNote] })
    }
    else {
      const newNote = {
        id: noteInput.id,
        heading: noteInput.headingValue === "" ? "(Untitled)" : noteInput.headingValue,
        description: noteInput.descriptionValue === "" ? "(Untitled)" : noteInput.descriptionValue,
        category: noteInput.categoryValue
      }
      const arr = notes


      notes.filter((ele) => {

        if (ele.id === newNote.id) {
          arr[ele.id] = newNote
          setNotes([])

          return newNote
        } return ele

      })

      setNotes([...arr])
    }
  }
  useEffect(() => {
    setNoteInput({
      headingValue: "",
      descriptionValue: "",
      categoryValue: "Personal"

    })

    setNoteMode("Note It")


  }, [notes])


  return (
    <Router>

      <div className='App'>
        <Routes>
          <Route exact path='/'
            element={<Home
              // searchNote = {searchNote}
              editNote={editNote}
              notes={notes}
              setNotes={setNotes}
              noteInput={noteInput}
              setNoteInput={setNoteInput}
              deleteNote={deleteNote}
              writingNote={writingNote}
              addNote={addNote}
              NoteMode={NoteMode}
              categories="All"
              hidden={hidden}
              setHidden={setHidden}
              key={"All"} />}
          />

          <Route exact path='/Personal'
            element={<Home

              editNote={editNote}
              notes={notes}
              setNotes={setNotes}
              noteInput={noteInput}
              setNoteInput={setNoteInput}
              deleteNote={deleteNote}
              writingNote={writingNote}
              addNote={addNote}
              NoteMode={NoteMode}
              categories="Personal"
              hidden={hidden}
              setHidden={setHidden}
              key={"Personal"} />}
          />
          <Route exact path='/Work'
            element={<Home

              editNote={editNote}
              notes={notes}
              setNotes={setNotes}
              noteInput={noteInput}
              setNoteInput={setNoteInput}
              deleteNote={deleteNote}
              writingNote={writingNote}
              addNote={addNote}
              NoteMode={NoteMode}
              categories="Work"
              hidden={hidden}
              setHidden={setHidden}
              key={"Work"} />}
          />
          <Route exact path='/Important'
            element={<Home

              editNote={editNote}
              notes={notes}
              setNotes={setNotes}
              noteInput={noteInput}
              setNoteInput={setNoteInput}
              deleteNote={deleteNote}
              writingNote={writingNote}
              addNote={addNote}
              NoteMode={NoteMode}
              categories="Important"
              hidden={hidden}
              setHidden={setHidden}
              key={"Important"} />}
          />
        </Routes>
      </div>
    </Router>
  )
}


export default App