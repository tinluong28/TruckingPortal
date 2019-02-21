import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const SingleTab = props => {
  SingleTab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       activeTab: this.props.children[0].props.label
  //       // this.props.children.length > 0
  //       //   ? this.props.children[0].props.label
  //       //   : this.props.children.props.label
  //     };
  //   }

  //   onClickTabItem = tab => {
  //     this.setState({ activeTab: tab });
  //   };

  const {
    props: { children }
  } = this;

  const Details = (
    <div className="tabs">
      <ol className="tab-list">
        <Tab
          activeTab={children.props.label}
          key={children.props.label}
          label={children.props.label}
        />
      </ol>
      <div className="tab-content">{children.props.children}</div>
    </div>
  );
  return <div>{Details}</div>;
};

export default SingleTab;
