import React from 'react'

export const About = () => {
    const myStyle = {
        minHeight: "100vh",
        margin: "40px auto"
    }
    return (
        
        <div className="container" style={myStyle}>
            <div className="row p-3">
                <div className="col-12">
                    <h2>About Us</h2>
                    <p>This is a simple online notes app, made with React.js
                    </p>
                    <p> You can add a note or delete any notes. Notes are stored in the browser's local storage.</p>
                </div>
            </div>
        </div>
    )
}
