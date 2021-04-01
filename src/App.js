import React, { Component } from "react";
import './App.css';
import API from './utils/API'
import PageTitle from "./Components/PageTitle"
import SearchBar from './Components/Search'
import Wrapper from './Components/Wrapper'
import Table from './Components/Table'

class App extends Component {

  state = {
    search: "",
    employees: [],
    shownEmployees: []
  }

  componentDidMount () {
    API.getRandomPerson()
    .then(response => {
        // console.log(this.props.search)
        // this.updateEmployees(response.data.results)
        this.setState({ "employees": response.data.results, "shownEmployees": response.data.results} )
        // console.log(this.state.employees)
    })
    .catch(err => console.error(err))
  }

  countrySearched = (country) => {
    // console.log(country)
    this.setState({"search": country}, () => {
      this.updateEmployees()
    })
  }


  updateEmployees() {
      const filteredResults = this.state.employees.filter(employee => employee.location.country === this.state.search)
      console.log("results", filteredResults, this.state)
      if(filteredResults.length){
          this.setState({"shownEmployees": filteredResults})
      } else {
        this.setState({"shownEmployees": this.state.employees })
      }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageTitle />
          <SearchBar 
            countrySearched={this.countrySearched}
          />
          <Wrapper>
            <Table 
              shownEmployees={this.state.shownEmployees}
            />
          </Wrapper>
        </header>
      </div>
    );

  }
}

export default App;
