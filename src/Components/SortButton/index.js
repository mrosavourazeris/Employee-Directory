import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'

function SortButton(props) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Sort A to Z</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Sort Z to A</Dropdown.Item>
    </DropdownButton>
  );
}

export default SortButton