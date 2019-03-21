import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentViewContainer } from "../../actions/deliveryOrderActions";

class ContainerTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.containers[0].number
    };
  }

  containerSelectedHandler = e => {
    // this.props.getCurrentViewContainer(e.target.container);
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {this.props.containers.map((con, index) => (
            <li
              key={con.number}
              index={index}
              name={con.number}
              className={
                activeTab === con.number
                  ? "tab-list-item tab-list-active"
                  : "tab-list-item"
              }
              container={con}
              onClick={this.containerSelectedHandler}
            >
              {con.number}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default connect(
  null,
  { getCurrentViewContainer }
)(ContainerTabs);
