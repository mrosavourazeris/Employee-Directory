import React, {Component} from 'react'
import API from '../../utils/API.js'
import EmployeeLine from '../Employee'
import "./style.css"

class Table extends Component {
    state = {
        employees: [],
        shownEmployees: []
    }

    

    componentDidMount () {
        API.getRandomPerson()
        .then(response => {
            this.setState({ "employees": response.data.results, "shownEmployees": response.data.results} )
            console.log(this.state.employees)
        })
        .catch(err => console.error(err))
    }

    render(){
        return (
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
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
            <tbody>
                {this.state.employees.map((employee,index) => {

                    console.log(employee)

                    return(
                
                    <EmployeeLine
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
}

export default Table 