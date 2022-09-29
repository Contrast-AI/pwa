import React, { createElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import Patient from "./patient"

function Notebook() {

  const generatePatients = (name) => {

  }

  return (
    <div class='container' style={{height: "800px"}}>
      <div class="row h-100" style={{position: 'relative'}}>
        <div class="col-4" style={{position: 'relative'}}>
          <div class='notebook-box-container'>
            <p class='notebook-header'>Patients:</p>
            <div class="patients-box">
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
              <Patient name="Patty O’Furniture" />
            </div>
          </div>
        </div>
        <div class="col-8" style={{position: 'relative'}}>
          <div class='notebook-box-container'>
            <p class='notebook-header'>Notes:</p>
            <textarea id="text" class="notes-box"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notebook;
