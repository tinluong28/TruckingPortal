import React from "react";

const driverStatus = () => {
  return (
    <div>
      <h1>Driver Status</h1>

      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Driver</th>
            <th scope="col">Destination</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mark</th>
            <td>Ontario</td>
            <td>Delivery</td>
          </tr>
          <tr>
            <th scope="row">Jacob</th>
            <td>Long Beach</td>
            <td>Return</td>
          </tr>
          <tr>
            <th scope="row">Francisco</th>
            <td>APM TERM</td>
            <td>Pick-up</td>
          </tr>
          <tr>
            <th scope="row">Robert</th>
            <td>City of Industry</td>
            <td>Delivery</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default driverStatus;
