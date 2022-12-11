import React, { Component } from "react";

class ClassCounterone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `clicked ${this.state.count} times`;
  }
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        click {this.state.count} times
      </button>
    );
  }
}

export default ClassCounterone;
