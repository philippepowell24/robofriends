import React from "react";

const Search = props => (
  <div className="pa2">
    <input
      onChange={props.onChange}
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search for a robot"
    ></input>
  </div>
);

export default Search;
