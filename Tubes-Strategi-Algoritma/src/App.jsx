import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import InputShelter from "./Pages/InputShelter";
import InputJarak from "./Pages/InputJarak";
import InputWaktu from "./Pages/InputWaktu";
import ShowData from "./Pages/ShowData";
import Result from "./Pages/Result";
import AboutUs from "./Pages/AboutUs";

function App() {
  const [data, setData] = useState([]);
  const [currentEntry, setCurrentEntry] = useState({
    date: "",
    shelter: "",
    time: "",
    distance: "",
    duration: "",
  });

  const updateEntry = (field, value) => {
    setCurrentEntry((prevEntry) => ({ ...prevEntry, [field]: value }));
  };

  const addEntry = () => {
    setData((prevData) => [...prevData, currentEntry]);
    setCurrentEntry({ date: "", shelter: "", time: "", distance: "", duration: "" });
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing addEntry={addEntry} />} />
        <Route path="/inputshelter" element={<InputShelter updateEntry={updateEntry} />} />
        <Route path="/inputjarak" element={<InputJarak updateEntry={updateEntry} />} />
        <Route path="/inputwaktu" element={<InputWaktu updateEntry={updateEntry} />} />
        <Route path="/showdata" element={<ShowData data={data} />} />
        <Route path="/result" element={<Result />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
