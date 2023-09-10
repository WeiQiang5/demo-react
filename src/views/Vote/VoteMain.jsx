// import PropType from "prop-types";
import { useMemo, useContext } from "react";
// 上下文对象
import ThemeContext from "@/ThemeContext";
/**
 * 函数子组件使用祖先的上下文
 * 1:跟class类子组件一样，使用ThemeContext.Consumer
 * 2:使用hooks 中useContext，然后将ThemeContext放入
 * */

const VoteMain = (props) => {
  let { supNum, oppNum } = useContext(ThemeContext);

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
// const VoteMain = (props) => {
//   // const { supNum, oppNum } = useContext();

//   // let ratio = () => {
//   //   let total = supNum + oppNum,
//   //     ratio = "--";
//   //   if (total > 0) {
//   //     ratio = ((supNum / total) * 100).toFixed(2) + "%";
//   //   }
//   //   return ratio;
//   // };

//   return (
//     <ThemeContext.Consumer>
//       {(context) => {
//         let { supNum, oppNum } = context;
//         return (
//           <div className="main">
//             <p>支持人数:{supNum}人</p>
//             <p>反对人数:{oppNum}人</p>
//             {/* <p>比例:{ratio}</p> */}
//           </div>
//         );
//       }}
//     </ThemeContext.Consumer>
//   );
// };

// const VoteMain = (props) => {
//   const { supNum, oppNum } = props;

//   let ratio = useMemo(() => {
//     let total = supNum + oppNum,
//       ratio = "--";
//     if (total > 0) {
//       ratio = ((supNum / total) * 100).toFixed(2) + "%";
//     }
//     return ratio;
//   }, [supNum, oppNum]);

//   return (
//     <div className="main">
//       <p>支持人数:{supNum}人</p>
//       <p>反对人数:{oppNum}人</p>
//       <p>比例:{ratio}</p>
//     </div>
//   );
// };

// VoteMain.defaultProps = {
//   supNum: 0,
//   oppNum: 0,
// };
// VoteMain.PropType = {
//   supNum: PropType.number,
//   oppNum: PropType.number,
// };

export default VoteMain;
