import PropType from "prop-types";
import { useMemo } from "react";

const VoteMain = (props) => {
  const { supNum, oppNum } = props;

  let ratio = useMemo(() => {
    let total = supNum + oppNum,
      ratio = "--";
    if (total > 0) {
      ratio = ((supNum / total) * 100).toFixed(2) + "%";
    }
    return ratio;
  }, [supNum, oppNum]);

  return (
    <div className="main">
      <p>支持人数:{supNum}人</p>
      <p>反对人数:{oppNum}人</p>
      <p>比例:{ratio}</p>
    </div>
  );
};

VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0,
};
VoteMain.PropType = {
  supNum: PropType.number,
  oppNum: PropType.number,
};

export default VoteMain;
