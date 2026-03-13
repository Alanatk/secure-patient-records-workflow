import React from "react";

function AccessControl(){

  const handleAccess = ()=>{
    alert("Access Granted Successfully");
  }

  return(
    <div className="card">

      <h2>Access Control</h2>

      <select>
        <option>Doctor</option>
        <option>Nurse</option>
        <option>Admin</option>
      </select>

      <button onClick={handleAccess}>
        Grant Access
      </button>

    </div>
  )
}

export default AccessControl;