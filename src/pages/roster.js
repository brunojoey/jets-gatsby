// Roster page for current roster
import React from 'react';
import Header from '../components/Header';

function Roster() {
  return (
    <div>
      <Header />
      <h1>This is the roster</h1>
      <table>
        <th>
          Name
        </th>
        <th>
          Position
        </th>
      </table>
    </div>
  )
};

export default Roster;