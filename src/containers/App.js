import React from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import Scroll from "../components/Scroll";

class App extends React.Component {
  state = {
    robots: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          robots: users
        })
      );
  }

  onChange = event =>
    this.setState({
      searchField: event.target.value
    });

  render() {
    const robotsToRender = this.state.robots.filter(value => {
      if (
        value.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      ) {
        return value;
      }
    });

    return (
      <div className="tc">
        <h1 className={"f1"}>Robofriends</h1>
        <Search onChange={this.onChange} />
        <Scroll>
          <CardList robots={robotsToRender} />
        </Scroll>
      </div>
    );
  }
}

export default App;
