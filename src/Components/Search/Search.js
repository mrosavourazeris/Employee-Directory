import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'


function SearchBar(props) {
    return (
        <InputGroup className="mb-3 searchBar">
        <InputGroup.Prepend>
            <InputGroup.Text className="inputGroup" id="basic-addon1">Search By Country</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            className="formControl"
            placeholder="Enter Country"
            aria-label="Country Search"
            aria-describedby="basic-addon1"
            onChange={e => props.countrySearched(e.target.value)}
        />
        </InputGroup>
    )
}

export default SearchBar