import React, { useState } from "react";
import "./App.css";

import AccessControl from "./AccessControl";
import PatientForm from "./PatientForm";
import PatientList from "./PatientList";

function App() {

  const [patients, setPatients] = useState([
    { name: "John Doe", id: "101", diagnosis: "Flu" },
    { name: "Mary Jane", id: "102", diagnosis: "Fever" },
    { name: "David Lee", id: "103", diagnosis: "Diabetes" }
  ]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  return (
    <div className="container">

      <h1>Secure Patient Records Workflow</h1>

      <AccessControl />

      <PatientForm addPatient={addPatient} />

      <PatientList patients={patients} />

    </div>
  );
}

export default App;