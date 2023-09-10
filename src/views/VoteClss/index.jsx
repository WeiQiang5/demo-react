import React from "react";
import VoteFooter from "./VoteFooter";
import VoteMain from "./VoteMain";
import "../../scss/Demo.scss";
// 上下文对象
import ThemeContext from "@/ThemeContext";

class Vote extends React.Component {
  state = { oppNum: 0, supNum: 0 };
  change = (type) => {
    let { oppNum, supNum } = this.state;
    if (type === "sup") {
      this.setState({ supNum: supNum + 1 });
      return;
    }
    this.setState({ oppNum: oppNum + 1 });
  };
  render() {
    let { supNum, oppNum } = this.state;
    return (
      /**
       * 基于上下文对象中，提供的Provider组件
       * +向上下文中存信息：value属性指定的值就是要存的信息
       * +当祖先组件更新，render重新执行，会把最新的状态值，再次赋值到上下文对象中
       * */
      <ThemeContext.Provider
        value={{
          supNum,
          oppNum,
          change: this.change,
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
  }
}

// 当前案例类组件中change只改变了父组件的状态，不会重新渲染，但是change方法没有变化
// class Vote extends React.Component {
//   state = { oppNum: 0, supNum: 0 };
//   change = (type) => {
//     let { oppNum, supNum } = this.state;
//     if (type === "sup") {
//       this.setState({ supNum: supNum + 1 });
//       return;
//     }
//     this.setState({ oppNum: oppNum + 1 });
//   };
//   render() {
//     let { supNum, oppNum } = this.state;
//     return (
//       <div className="vote-box">
//         <div className="header">
//           <h2 className="title">react牛逼</h2>
//           <span className="num">{supNum + oppNum}</span>
//         </div>
//         <VoteMain oppNum={oppNum} supNum={supNum} />
//         <VoteFooter change={this.change} />
//       </div>
//     );
//   }
// }

export default Vote;
