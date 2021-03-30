import React from 'react'
import './style.css'

function TableHeader(props) {
    return (
      <thead>
        <tr className="tableHeader">
          <th scope="col">#</th>
          <th scope="col">Picture</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">
            Country
          </th>
          {/* <th scope="col">
              <label 
                  htmlFor="Country">Country
              </label>
              <select>
                  {this.state.employees.reduce((countryList, employee) => {
                      const employeeCountry = employee.location.country
                      if (!countryList.includes(employeeCountry)) {
                          countryList.push(employeeCountry)
                      } 
                  }, []).map(country => {
                  return <option value={country}>{country}</option>})}
              </select>
          </th>
          <button>Aussies</button> */}
        </tr>
      </thead>
    );
}

export default TableHeader