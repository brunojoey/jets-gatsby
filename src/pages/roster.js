// Roster page for current roster
import React from 'react';
import Header from '../components/Header';
import roster from '../utils/roster.json';

function Roster() {

  let rosterData;
  rosterData = roster.map((players) => {
    return (
      <tbody key={players.name}>
        <tr className='roster-table-rows row'>
          <td className='col-1-of-3'>
            {players.name}
          </td>
          <td className='col-1-of-3'>
            {players.position}
          </td>
          <td className='col-1-of-3'>
            {players.number}
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      {/* <Header /> */}
      <h1>This is the roster</h1>
      <table className='roster-table'>
        <th className='roster-table-name-heading'>
          Name
        </th>
        <th className='roster-table-position-heading'>
          Position
        </th>
        <th className='roster-table-number-heading'>
          Number
        </th>
        {rosterData}
      </table>
    </div>
  )
};

export default Roster;