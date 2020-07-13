import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Addbtn from './components/layout/Addbtn';

const App = () => {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          <SearchBar />
          <div className="container">
            <Logs />
            <Addbtn />
            <AddLogModal />
            <EditLogModal />
            <AddTechModal />
            <TechListModal />
          </div>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
