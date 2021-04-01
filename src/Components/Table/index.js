import React, {Component} from 'react'
import API from '../../utils/API.js'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import "./style.css"



function Table (props) {


    return (
        <table className="table">
        <TableHeader sortByFirst={props.sortByFirst}/>
        <tbody>
            {props.shownEmployees.map((employee,index) => {
                return(
                    <TableRow
                        key={index}
                        employeeKey={index + 1}
                        image={employee.picture.thumbnail}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        email={employee.email}
                        phone={employee.phone}
                        location={employee.location.country}
                    />
                )
            })}
        </tbody>
        </table>
    );
}

export default Table 