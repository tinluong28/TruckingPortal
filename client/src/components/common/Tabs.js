import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
      // this.props.children.length > 0
      //   ? this.props.children[0].props.label
      //   : this.props.children.props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  onClickItem = number => {
    this.props.children.props.setID(number);
  };

  render() {
    const {
      onClickTabItem,
      onClickItem,
      props: { children },
      state: { activeTab }
    } = this;

    let Details;
    if (children.length > 0) {
      Details = (
        <div className="tabs">
          <ol className="tab-list">
            {React.Children.map(children, child => {
              const { label } = child.props;
              const { setID } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  setID={onClickItem}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ol>
          <div className="tab-content">
            {React.Children.map(children, child => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            })}
          </div>
        </div>
      );
    } else {
      Details = (
        <div className="tabs">
          <ol className="tab-list">
            <Tab
              activeTab={activeTab}
              key={children.props.label}
              label={children.props.label}
              onClick={onClickTabItem}
            />
          </ol>
          <div className="tab-content">{children.props.children}</div>
        </div>
      );
    }
    return <div>{Details}</div>;
  }
}

export default Tabs;
