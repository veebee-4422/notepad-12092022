import React from 'react'
import {NoteItem} from "./NoteItem";

export const Notes = (props) => {
    const myStyle = {
        minHeight: "100vh"
    }
    const noteItems = props.notes.map(note => (<NoteItem note={note} key={note.sno} onDelete={props.onDelete}/>));
    return (
        <div className="container mt-5" style={myStyle}>
            <h3 className="my-3">My Notes</h3>
            {props.notes.length === 0 ? "No Notes to display" : noteItems} 
        </div>
    )
}
