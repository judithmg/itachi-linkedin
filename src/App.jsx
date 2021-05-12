import React from 'react';
import Inbox from './components/Inbox';
import TopSkills from './components/TopSkills';
import Pending from './components/Pending';
import SideNav from './components/SideNav';
import Connections from './components/Connections';
import About from './components/About';
import Jobs from './components/JobsForYou';
import RecentSearch from './components/RecentSearch';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="side-column">
          <SideNav />
        </div>
        <div className="middle-column">
          <div className="middle-upper">
            <TopSkills />
            <Connections />
            <div className="middle-right">
              <Pending />
              <RecentSearch />
            </div>
          </div>
          <About />
        </div>
        <div className="side-column">
          <Jobs />
          <Inbox />
        </div>
      </div>
    </div>
  );
}

export default App;
