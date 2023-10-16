import React from 'react'
import "./Css/form.css"
const Form = ({ hidden, setHidden, noteInput, writingNote, addNote, NoteMode }) => {
    return (
        <div className={`noting${hidden.noteItBox ? ' hide-n-c-box' : ""}`}>
            <header>
                <div className="heading">Note It</div>
                <div className="right-nav">
                    <div className="minimize"></div>
                    <button className="close" key={"x"} onClick={() => { setHidden({ sideBar: hidden.sideBar, noteItBox: true }) }}>X</button>
                </div>
            </header>
            <div>
                <label htmlFor="heading">Heading:</label>
                <div className="heading-input input-with-in">
                    <input type="text" id="heading" placeholder="Enter Your Heading" key="heading" className='basic-input-box' value={noteInput.headingValue} onChange={writingNote} />
                </div>
                <label htmlFor="heading">Category:</label>
                <div className="heading-input">
                    <select id="notecategory" value={noteInput.category} onChange={writingNote}>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Important">Important</option>

                    </select>
                </div>
                <div className="text">
                    <textarea name="" cols="70" rows="13" id='Description' value={noteInput.descriptionValue} key={"description"} onChange={writingNote}></textarea>
                </div>

            </div>
            <div className="add-new-note-btn">
                <button onClick={addNote} >{NoteMode}</button>
            </div>
        </div>
    )
}

export default Form