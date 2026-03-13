import React, { useState } from "react";

function PatientForm({ addPatient }) {

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const addRecord = () => {

    const newPatient = {
      name: name,
      id: id,
      diagnosis: diagnosis
    };

    addPatient(newPatient);

    alert("Patient Added Successfully ");

    setName("");
    setId("");
    setDiagnosis("");
  };

  return (
    <div className="card">

      <h2>Add Patient Record</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Patient ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
      />

      <button onClick={addRecord}>
        Add Record
      </button>

    </div>
  );
}

export default PatientForm;