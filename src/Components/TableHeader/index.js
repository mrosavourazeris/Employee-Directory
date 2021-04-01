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
          <th scope="col">Country</th>
        </tr>
      </thead>
    );
}

export default TableHeader