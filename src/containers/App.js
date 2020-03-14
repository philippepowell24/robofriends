import React from "react";
import CardList from "../components/CardList";
import Search from "../components/Search";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const robotsToRender = robots.filter(value => {
      if (value.name.toLowerCase().includes(searchField.toLowerCase())) {
        return value;
      }
    });

    return isPending ? (
      <h1 className={"pa3"}>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className={"f1"}>Robofriends</h1>
        <Search onChange={onSearchChange} />
        <Scroll>
          <CardList robots={robotsToRender} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
