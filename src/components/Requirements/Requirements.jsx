import React from 'react';
import './requirements.css';

const Requirements = () => (
  <div className="requirements-container">
    <div className="requirements-content">
      <div className="requirements-header">
        <h1>BASIC REQUIREMENT FOR DIALYSIS PATIENTS</h1>
      </div>
      <ul className="requirements-list">
        <li>Compulsory Doctors orders</li>
        <li>
          Compulsory blood test for HIV, Hep B, and Hep C for all patients
          before commencing their first dialysis session.
          <br />
          <span className="note">
            <strong>NOTE:</strong> Currently we are unable to accommodate
            patients with Hep B and Hep C due to the number of machines at the
            center.
          </span>
        </li>
        <li>
          Copies of the latest blood results for full blood count and biochemistry.
        </li>
        <li>
          Medical summary/report for 3 weeks and haemodialysis flow sheets for
          one week.
        </li>
      </ul>
    </div>
  </div>
);

export default Requirements;
