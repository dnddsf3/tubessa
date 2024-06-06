import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import InputShelter from "./Pages/InputShelter";
import InputJarak from "./Pages/InputJarak";
import InputWaktu from "./Pages/InputWaktu";
import ShowData from "./Pages/ShowData";
import Result from "./Pages/Result";
import AboutUs from "./Pages/AboutUs";
import initialData from "../src/Pages/Data.json"; // Import Data.json

function App() {
  const [data, setData] = useState(initialData); // Use initialData as the initial state
  const [currentEntry, setCurrentEntry] = useState({
    date: "",
    shelterojek: "",
    distance: "",
    duration: "",
  });

  const updateEntry = (field, value) => {
    setCurrentEntry((prevEntry) => ({ ...prevEntry, [field]: value }));
  };

  const addEntry = () => {
    const distanceInt = parseInt(currentEntry.distance);
    const durationInt = parseInt(currentEntry.duration);

    if (
      currentEntry.date.trim() !== "" &&
      currentEntry.shelterojek.trim() !== "" &&
      !isNaN(distanceInt) &&
      !isNaN(durationInt)
    ) {
      setData((prevData) => [
        ...prevData,
        {
          ...currentEntry,
          distance: distanceInt,
          duration: durationInt,
        },
      ]);
      setCurrentEntry({ date: "", shelterojek: "", distance: "", duration: "" });
    } else {
      alert("Please fill in all fields with valid numbers.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing addEntry={addEntry} />} />
        <Route path="/inputshelter" element={<InputShelter updateEntry={updateEntry} />} />
        <Route path="/inputjarak" element={<InputJarak updateEntry={updateEntry} />} />
        <Route path="/inputwaktu" element={<InputWaktu updateEntry={updateEntry} />} />
        <Route path="/showdata" element={<ShowData data={data} />} />
        <Route path="/result" element={<Result data={data} />} />
        <Route path="/aboutus" element={<AboutUs data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
