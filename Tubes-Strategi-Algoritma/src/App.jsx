import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import InputWaktu from "./Pages/InputWaktu";
import InputJarak from "./Pages/InputJarak";
import InputTempuh from "./Pages/InputTempuh";
import ShowData from "./Pages/ShowData";
import Result from "./Pages/Result";

function App() {
  const [data, setData] = useState([]);
  const [currentEntry, setCurrentEntry] = useState({
    date: "",
    time: "",
    distance: "",
    duration: "",
  });

  const updateEntry = (field, value) => {
    setCurrentEntry((prevEntry) => ({ ...prevEntry, [field]: value }));
  };

  const addEntry = () => {
    setData((prevData) => [...prevData, currentEntry]);
    setCurrentEntry({ date: "", time: "", distance: "", duration: "" });
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing addEntry={addEntry} />} />
        <Route path="/inputwaktu" element={<InputWaktu updateEntry={updateEntry} />} />
        <Route path="/inputjarak" element={<InputJarak updateEntry={updateEntry} />} />
        <Route path="/inputtempuh" element={<InputTempuh updateEntry={updateEntry} />} />
        <Route path="/showdata" element={<ShowData data={data} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
