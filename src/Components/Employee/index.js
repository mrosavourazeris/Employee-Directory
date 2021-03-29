import React from "react";

function EmployeeLine(props) {
  <tr>
    <th scope="row">1</th>
    <td><img alt={props.name} src={props.image} /></td>
    <td>{props.name}</td>
    <td>{props.email}</td>
    <td>{props.location}</td>
    <td>{props.phone}</td>
  </tr>;
}

export default EmployeeLine;
