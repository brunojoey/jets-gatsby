// Header component to be reused for whole website
// Will include links to Team Roster, History Page, and All-Time Personal Team
import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

function Header() {
  return (
    <div>
      <header className='header'>
        <div className='header-name'>
          <h2>New York Jets Gatsby</h2>
        </div>
        <div className='header-links'>
          <Link to='/roster' className='header-links-roster'>Roster</Link>
          <Link to='/history' className='header-links-history'>Team History</Link>
          <Link to='/all-time-team' className='header-links-allTime'>My All-Time Jets Team</Link>
        </div>
      </header>
    </div>
  )
};

export default Header;