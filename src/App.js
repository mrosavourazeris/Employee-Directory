import React, { Component } from "react";
import './App.css';
import API from './utils/API'
import PageTitle from "./Components/PageTitle/PageTitle"
import SearchBar from './Components/Search/Search'
import Wrapper from './Components/Wrapper/Wrapper'
import Table from './Components/Table/Table'

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


  updateEmployees = () => {
      const filteredResults = this.state.employees.filter(employee => employee.location.country === this.state.search)
      console.log("results", filteredResults, this.state)
      if(filteredResults.length){
          this.setState({"shownEmployees": filteredResults})
      } else {
        this.setState({"shownEmployees": this.state.employees })
      }
  }

  sortByFirst = () => {
    console.log(this.state.shownEmployees)
    const sortByFirstName = this.state.shownEmployees.sort((a,b) => {
      if(a.name.first < b.name.first) { return -1; }
      if(a.name.first > b.name.first) { return 1; }
      return 0;
    })
    console.log(sortByFirstName)
    this.setState({'shownEmployees': sortByFirstName})
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
              sortByFirst={this.sortByFirst}
            />
          </Wrapper>
        </header>
      </div>
    );

  }
}

export default App;
