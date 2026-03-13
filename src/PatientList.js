import React from "react";

function PatientList({ patients }) {

  return (
    <div className="card">

      <h2>Patient Records</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>ID</th>
            <th>Diagnosis</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p,index)=>(
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.id}</td>
              <td>{p.diagnosis}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default PatientList;