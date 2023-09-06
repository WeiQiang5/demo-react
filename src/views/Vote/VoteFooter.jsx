import PropType from "prop-types";
import { memo } from "react";
const VoteFooter = (props) => {
  console.log("geng");
  const { change } = props;
  return (
    <div className="footer">
      <button onClick={change.bind(null, "sup")}>支持</button>
      <button onClick={change.bind(null, "opp")}>反对</button>
    </div>
  );
};

VoteFooter.defaultProps = {};
VoteFooter.prototype = {
  change: PropType.func.isRequired,
};

export default memo(VoteFooter);
