import React, { useState } from 'react';

export const AddNote = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addNote(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container mt-5">
            <h3>Add a Note</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Note Description</label>
                    <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Note</button>
            </form>
        </div>
    )
}
