import React from "react";

const ProfileInfo = props => {
  return (
    <div className="col-6 no-padding">
      <table className="table table-borderless no-padding">
        <tbody>
          <tr>
            <th scope="row" className="no-padding">
              Name
            </th>
            <td>{props.profileInfo.user.name}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              Address
            </th>
            <td>{props.profileInfo.address}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              City
            </th>
            <td>{props.profileInfo.city}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              State
            </th>
            <td>{props.profileInfo.state}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              Zip Code
            </th>
            <td>{props.profileInfo.zipcode}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              Business Type
            </th>
            <td>{props.profileInfo.businesstype}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              Business Establish Date
            </th>
            <td>{props.profileInfo.doingbusinesssince}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              Tax ID#
            </th>
            <td>{props.profileInfo.taxid}</td>
          </tr>
          <tr>
            <th scope="row" className="no-padding">
              Credit
            </th>
            <td>{props.profileInfo.credit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInfo;
