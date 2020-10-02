import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import App from './app-universal.jsx';

const MainApp = () => (
   <Router>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
);

export default MainApp;