import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router dom";


function App() {
  const [mode, setMode] = useState('light');   // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode has been enabled', "success");
      document.title = "TextUtils-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', "success");
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" mode={mode} /> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <Router>
          <Routes>
            <Route exact path="/About" element={<About />} />
            <Route exact path="/" element={<TextForm />} showAlert={showAlert} heading="Enter The Text To Analyse Below :" mode={mode} />
            { /*exact matching and parsial matching */}
            {/* <TextForm showAlert={showAlert} heading="Enter The Text To Analyse Below :" mode={mode} /> */}
            {/* <About /> */}
          </Routes>
        </Router>
      </div >
    </>
  );
}

export default App;
