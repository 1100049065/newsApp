import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
//require('dotenv').config();


export default class App extends Component {
  pageSize = 5;
  apiKey = "b495020c1c4e4c429c8774341ce30596" ;
  //apiKey = process.env.local.REACT_NEWS_API_KEY;

  state = { progress : 0 }
  setProgress = (progress) => {
    this.setState({progress:progress })
}
  render() {
    return (
      <div> 
      <Router>
      <Navbar/>
      <LoadingBar
        height={5}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />

      <Switch>
      <Route exact path="/"><News setProgress={ this.setProgress } apiKey={this.apiKey}pageSize={this.pageSize}  country="in" category="general"/>General </Route>
      <Route exact path="/business"><News setProgress={ this.setProgress } apiKey={this.apiKey}key="business" pageSize={this.pageSize} country="in" category="business"/> </Route>
      <Route exact path="/entertainment"><News setProgress={ this.setProgress } apiKey={this.apiKey}key="entertainment" pageSize={this.pageSize}  country="in" category="entertainment"/> </Route>
      <Route exact path="/health"><News setProgress={ this.setProgress } apiKey={this.apiKey}key="health" pageSize={this.pageSize}  country="in" category="health"/> </Route>
      <Route exact path="/science"><News setProgress={ this.setProgress } apiKey={this.apiKey}key="science" pageSize={this.pageSize}  country="in" category="science"/> </Route>
      <Route exact path="/sports"><News setProgress={ this.setProgress } apiKey={this.apiKey}key="sports" pageSize={this.pageSize}  country="in" category="sports"/> </Route>
      <Route exact path="/technology"><News setProgress={ this.setProgress } apiKey={this.apiKey}key="technology" pageSize={this.pageSize}  country="in" category="technology"/> </Route>
    </Switch>

      </Router>
       </div>

      

    )
  }
}
