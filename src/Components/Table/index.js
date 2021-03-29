import React, {Component} from 'react'
import API from '../../utils/API.js'
import EmployeeLine from '../Employee'

class Table extends Component {
    state = {
        employees: []
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
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(employee => (
                  <EmployeeLine 
                    name={employee.name}
                  />
              ))}
            </tbody>
          </table>
        );
    }
}

export default Table 