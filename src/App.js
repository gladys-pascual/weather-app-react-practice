import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Dublin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  };

  onSearch = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.data && (
                <Home
                  data={this.state.data}
                  onSearch={this.onSearch}
                  cityName={this.state.data.city.name}
                />
              )
            }
          />
        </Switch>
      </>
    );
  }
}

export default App;
