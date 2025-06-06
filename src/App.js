import React from 'react';
import Alarms from './Pages/Alarms/index';
import Machines from './Pages/Machines/index';


// Import scss
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Users from './Pages/Users';
import AlarmHistory from './Pages/AlarmHistory';
import Analysis from './Pages/Analysis';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Machines/>}/>
        <Route path={'/alarms/:id'} element={<Alarms/>}/>
        <Route path={'/users'} element={<Users/>}/>
        <Route path={'/analysis'} element={<Analysis/>}/>
        <Route path={'/alarm_history'} element={<AlarmHistory/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
