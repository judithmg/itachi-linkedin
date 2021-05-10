import React from 'react';
import Inbox from './components/Inbox';
// import Pending from './components/Pending';
// import SideNav from './components/SideNav';
// import Connections from './components/Connections';
// import About from './components/About';
// import Jobs from './components/JobsForYou';
// import RecentSearch from './components/RecentSearch';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="left-column">
        {/* <SideNav /> */}
      </div>
      <div className="middle-column">
        <div className="middle-left" />
        <div className="middle-middle">
          {/* <Connections /> */}
        </div>
        <div className="middle-right">
          {/* <Pending /> */}
          {/* <RecentSearch /> */}
        </div>
        {/* <About /> */}
      </div>
      <div className="right-column">
        {/* <Jobs /> */}
        <Inbox />
      </div>

    </div>
  );
}

export default App;
