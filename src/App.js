import './App.css';
import Header from "./MyComponents/Header";
import { Notes } from "./MyComponents/Notes";
import { Footer } from "./MyComponents/Footer";
import { AddNote } from "./MyComponents/AddNote";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [notes, setNotes] = useState(localStorage.getItem("notes") === null ? [] : JSON.parse(localStorage.getItem("notes")));
  
  const onDelete = (targetNote) => {
    setNotes((oldNotes)=>{
      return oldNotes.filter(n => n !== targetNote);
    });
  }

  const addNote = (title, desc) => {
    const myNote = {
      sno: (notes.length === 0) ? 0 : (notes[notes.length - 1].sno + 1),
      title: title,
      desc: desc,
    }
    setNotes([...notes, myNote]);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return ( 
    <> 
    <BrowserRouter>
      <Header title="My Notepad" searchBar={false} /> 
      <Routes>
          <Route exact path="/" element={
            <>
            <AddNote addNote={addNote} />
            <Notes notes={notes} onDelete={onDelete} /> 
            </>
          }> 
          </Route>
          <Route exact path="/about" element={
            <About />
          }>
          </Route> 
        </Routes> 
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
