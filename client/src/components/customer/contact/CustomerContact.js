import React, { Component } from "react";
import AddCustomerContact from "./AddCustomerContact";
import ContactDisplay from "./ContactDisplay";
const customerContact = props => {
  const onDataChange = (name, value) => {
    props.changeData(name, value);
  };
  const onDelete = id => {
    props.onClickDelete(id);
  };
  const customerContact = props.contact.map(con => (
    <ContactDisplay
      key={con._id}
      contactID={con._id}
      name={con.name}
      position={con.position}
      office={con.office}
      cell={con.cell}
      email={con.email}
      about={con.about}
      onDelete={onDelete}
    />
  ));
  return (
    <div className="row">
      <div className="col-md-12">
        {/* Display contacts */}
        <div
          style={{ borderTopColor: "orange", borderTopWidth: "5px" }}
          className="card card-body mb-3 shadow p-3 mb-5 bg-white rounded"
        >
          <h3 className="mb-4">Contact Info</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Cell</th>
                <th>Email</th>
                <th>Remark</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {customerContact}
              <AddCustomerContact
                id={props.id}
                changeData={onDataChange}
                addContact={props.addContact}
                name={props.name}
                position={props.position}
                office={props.office}
                cell={props.cell}
                email={props.email}
                about={props.about}
                errors={props.errors}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default customerContact;
