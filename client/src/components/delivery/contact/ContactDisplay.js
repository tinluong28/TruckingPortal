import React from "react";

const ContactDisplay = props => {
  const onDelete = () => {
    props.onDelete(props.contactID);
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.position}</td>
      <td>{props.office}</td>
      <td>{props.cell}</td>
      <td>{props.email}</td>
      <td>{props.about}</td>
      <td>
        <button className={"btn btn-sm btn-outline-danger"} onClick={onDelete}>
          <i className="far fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

export default ContactDisplay;
