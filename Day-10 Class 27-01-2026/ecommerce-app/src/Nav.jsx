import { Component } from "react";
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState((e) => ({
              count: e.count + 1,
            }));
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Nav;
