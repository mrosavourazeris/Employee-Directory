import React from "react";
import './style.css'

function EmployeeLine(props) {
    return (
    <tr className="tableRow">
        <th scope="row">{props.employeeKey}</th>
        <td><img alt={props.firstName} src={props.image} /></td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.location}</td>
    </tr>
    )
  
}

export default EmployeeLine;

