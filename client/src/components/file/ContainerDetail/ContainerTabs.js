import React, { Component } from "react";

class ContainerTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.containerNumbers[0]
    };
  }
  render() {
    const tabs =
      this.props.containerNumbers.length > 0 ? (
        this.props.containerNumbers.map(num => (
          <li
            className={
              this.state.current === num
                ? "tab-list-item tab-list-active"
                : "tab-list-item"
            }
            key={num}
            onClick={() => {
              this.props.switchContainer(num);
              this.setState({ current: num });
            }}
          >
            {num}
          </li>
        ))
      ) : (
        <li className="tab-list-item">New Container</li>
      );
    return (
      <ul>
        {tabs}
        <li className="tab-list-item">+</li>
      </ul>
    );
  }
}

export default ContainerTabs;
