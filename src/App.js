
import './App.css';
import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'

import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {

  static defaultProps = {
    category: "/",
    pageSize: 20,

  }
  static propsType = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }

  render() {
    this.pageSize = 15;
    return (
      <>
        <Router>
          <NavBar ></NavBar>
          <LoadingBar
            color='#f11946'
            height = {3}
            progress={this.state.progress}
          // onLoaderFinished={() => this.setProgress(0)}
          />
          <Switch>


            <Route exact path="/" key={"general"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"general"} ></News></Route>
            <Route exact path="/business" key={"business"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"business"}></News></Route>
            <Route exact path="/entertainment" key={"entertainment"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"entertainment"}></News></Route>
            <Route exact path="/health" key={"health"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"health"}></News></Route>
            <Route exact path="/science" key={"science"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"science"}></News></Route>
            <Route exact path="/sports" key={"sports"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"sports"}></News></Route>
            <Route exact path="/technology" key={"technology"}><News setProgress={this.setProgress} pageSize={this.pageSize} category={"technology"}></News></Route>

          </Switch>

        </Router>

      </>
    )
  }
}



