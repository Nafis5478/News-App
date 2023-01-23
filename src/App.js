// import logo from './logo.svg';

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import LoadingBar from "react-top-loading-bar";
// const { v4: uuidv4 } = require("uuid");
export default class App extends Component {
  pageSize = 6;
  // apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/business"
              apiKey={this.apiKey}
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/entertainment"
              apiKey={this.apiKey}
              element={
                <News
                  key={uuidv4()}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/"
              apiKey={this.apiKey}
              element={
                <News
                  key={uuidv4()}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/health"
              apiKey={this.apiKey}
              element={
                <News
                  key={uuidv4()}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/science"
              apiKey={this.apiKey}
              element={
                <News
                  key={uuidv4()}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/sports"
              apiKey={this.apiKey}
              element={
                <News
                  key={uuidv4()}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="/technology"
              apiKey={this.apiKey}
              element={
                <News
                  key={uuidv4()}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
