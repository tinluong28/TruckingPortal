import React from "react";

const driverStatus = () => {
  return (
    <div>
      <h1>Driver Status</h1>

      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Vehicle</th>
            <th scope="col">Driver</th>
            <th scope="col">Destination</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">8FDE976</th>
            <td>Mark</td>
            <td>Ontario</td>
          </tr>
          <tr>
            <th scope="row">7ADE907</th>
            <td>Jacob</td>
            <td>Long Beach</td>
          </tr>
          <tr>
            <th scope="row">7DER215</th>
            <td>Francisco</td>
            <td>APM TERM</td>
          </tr>
          <tr>
            <th scope="row">7AND298</th>
            <td>Robert</td>
            <td>City of Industry</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default driverStatus;
