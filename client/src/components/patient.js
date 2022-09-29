import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css"

function Patient(name) {
  return (
    <div>
        <p>{name.name}</p>
    </div>
  );
}

export default Patient;
