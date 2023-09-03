import { Button } from "antd";
import React, { useState } from "react";

// 自定义hooks
const usePartialState = function usePartialState(initialValue) {
  let [state, setState] = useState(initialValue);
  // setState:不支持部分修改
  // setPartial：我们希望这个方法可以支持部分状态的更改
  const setPartial = function setPartial(partialState) {
    setState({
      ...state,
      ...partialState,
    });
  };
  return [state, setPartial];
};

const Demo = () => {
  let [state, setPartial] = usePartialState({
    supNum: 10,
    oppNum: 5,
  });
  return (
    <div>
      <div className="main">
        <p>支持人数:{state.supNum}人</p>
        <p>反对人数:{state.oppNum}人</p>
      </div>
      <div className="footer">
        <Button
          type="primary"
          onClick={() => setPartial({ supNum: state.supNum + 1 })}
        >
          支持
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => setPartial({ oppNum: state.oppNum + 1 })}
        >
          反对
        </Button>
      </div>
    </div>
  );
};

export default Demo;
