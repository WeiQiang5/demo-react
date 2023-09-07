import React from "react";
import PropTypes from "prop-types";
class VoteFooter extends React.PureComponent {
  static defaultProps = {};
  static propTypes = {
    change: PropTypes.func.isRequired,
  };
  render() {
    console.log("更新");
    let { change } = this.props;
    return (
      <div className="footer">
        <button onClick={change.bind(null, "sup")}>支持</button>
        <button onClick={change.bind(null, "opp")}>反对</button>
      </div>
    );
  }
}

export default VoteFooter;
