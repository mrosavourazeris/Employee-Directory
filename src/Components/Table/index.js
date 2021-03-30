import React, {Component} from 'react'
import API from '../../utils/API.js'
import EmployeeLine from '../Employee'

class Table extends Component {
    state = {
        employees: [],
        filterSort: []
    }

    

    componentDidMount () {
        API.getRandomPerson()
        .then(response => {
            this.setState({ "employees": response.data.results})
            console.log(this.state.employees)
        })
        .catch(err => console.error(err))
    }

    render(){
        return (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
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
              {/* <tr>
                <th scope="row">1</th>
                <td>Michael</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </table>
        );
    }
}

export default Table 