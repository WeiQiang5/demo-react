import React, { useState, useCallback } from "react";
import "../../scss/Demo.scss";
import VoteFooter from "./VoteFooter";
import VoteMain from "./VoteMain";
// 上下文对象
import ThemeContext from "@/ThemeContext";

/**
 * 1.与class类组件一样，先引入上下文，然后把数据value传入到ThemeContext.Provider
 * */

const Vote = function Vote() {
  let [supNum, setSupNum] = useState(10),
    [oppNum, setOppNum] = useState(5);

  const change = (type) => {
    if (type === "sup") {
      setSupNum(supNum + 1);
      return;
    }
    setOppNum(oppNum + 1);
  };

  return (
    <ThemeContext.Provider
      value={{
        supNum,
        oppNum,
        change,
      }}
    >
      <div className="vote-box">
        <div className="header">
          <h2 className="title">react牛逼</h2>
          <span className="num">{supNum + oppNum}</span>
        </div>
        <VoteMain />
        <VoteFooter />
      </div>
    </ThemeContext.Provider>
  );
};

// const Vote = function Vote() {
//   let [supNum, setSupNum] = useState(10),
//     [oppNum, setOppNum] = useState(0);

//   const change = useCallback(
//     (type) => {
//       if (type === "sup") {
//         setSupNum(supNum + 1);
//         return;
//       }
//       setOppNum(oppNum + 1);
//     },
//     [oppNum, supNum]
//   );

//   return (
//     <div className="vote-box">
//       <div className="header">
//         <h2 className="title">react牛逼</h2>
//         <span className="num">{supNum + oppNum}</span>
//       </div>
//       <VoteMain supNum={supNum} oppNum={oppNum} />
//       <VoteFooter change={change} />
//     </div>
//   );
// };

export default Vote;
