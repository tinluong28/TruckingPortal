import React from "react";
import classnames from "classnames";

const AddCustomerContact = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };

  return (
    <tr>
      <td className="input-group-sm">
        <input
          // className="form-control"
          className={classnames("form-control", {
            "is-invalid": props.errors.name
          })}
          type="text"
          name="name"
          value={props.name}
          onChange={onDataChange}
          placeholder="Name"
        />
        {props.errors.name && (
          <span className="invalid-feedback">{props.errors.name}</span>
        )}
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          type="text"
          name="position"
          value={props.position}
          onChange={onDataChange}
          placeholder="Position"
        />
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          type="text"
          name="office"
          value={props.office}
          onChange={onDataChange}
          placeholder="Office #"
        />
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          type="text"
          name="cell"
          value={props.cell}
          onChange={onDataChange}
          placeholder="Cell #"
        />
      </td>
      <td className="input-group-sm">
        <input
          className="form-control"
          type="text"
          name="email"
          value={props.email}
          onChange={onDataChange}
          placeholder="Email"
        />
      </td>
      <td className="input-group-sm">
        <textarea
          className="form-control"
          name="about"
          value={props.about}
          onChange={onDataChange}
          placeholder="About"
        />
      </td>
      <td>
        <button
          onClick={props.addContact}
          className="btn btn-sm btn-primary"
          style={{
            display: props.id ? "inline-block" : "none"
          }}
        >
          <i className="fas fa-plus" />
        </button>
      </td>
    </tr>
  );
};

export default AddCustomerContact;
