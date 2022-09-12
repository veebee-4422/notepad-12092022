import React from 'react'

export const NoteItem = ({note, onDelete}) => {
    return (
        <>
        <div>
           <h4>{note.title}</h4>
           <p>{note.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(note)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
