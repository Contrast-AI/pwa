import React, { createElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import Patient from "./patient"

function Notebook() {

  const generatePatients = (name) => {

  }

  return (
    <div className='container' style={{height: "800px"}}>
      <div className="row h-100" style={{position: 'relative'}}>
        <div className="col-4" style={{position: 'relative'}}>
          <div className='notebook-box-container'>
            <p className='notebook-header'>Patients:</p>
            <div className="patients-box">
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
            </div>
          </div>
        </div>
        <div className="col-8" style={{position: 'relative'}}>
          <div className='notebook-box-container'>
            <p className='notebook-header'>Notes:</p>
            <textarea id="text" className="notes-box"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notebook;
