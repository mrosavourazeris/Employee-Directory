import React, { Component } from "react";
import './App.css';
import PageTitle from "./Components/PageTitle"
import SearchBar from './Components/Search'
import Wrapper from './Components/Wrapper'
import Table from './Components/Table'

class App extends Component {

  state = {
    countrySearched: ""
  }

  countrySearched = (country) => {
    this.setState({"countrySearched": country})
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
              countrySearched={this.countrySearched}
            />
          </Wrapper>
        </header>
      </div>
    );

  }
}

export default App;
