import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Surel Feedback Information</h1>
        <p>
          Welcome to SFI
        </p>
         <a href="/auth/google" style={myGoogleButton}>Sign In With Google</a>
      </header>
    </div>
  );
}

const myGoogleButton = {
  height:"40px",
  borderWidth:"0",
  background:"#dd4b39",
  color:"#fff",
  borderRadius:"5px",
  borderColor: "rgba(0,0,0,0.2)",
  paddingLeft:"5px",
  paddingRight:"5px",
  paddingTop:"5px",
  textDecoration:"none"
};

export default App;
