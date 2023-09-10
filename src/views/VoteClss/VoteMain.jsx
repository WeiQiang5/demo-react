import React from "react";
import ThemeContext from "@/ThemeContext";

/**
 * 后代类组件获取上下文中的方法
 * 方案一
 * + 导入创建的上下文对象
 * + 给类组件设置静态私有属性contextType=上下文对象
 * + 在this.context属性上，存了上下文中的所有信息
 * */
class VoteMain extends React.Component {
  static contextType = ThemeContext;
  render() {
    let { supNum, oppNum } = this.context;
    console.log(this.context);
    let ratio = "--",
      total = supNum + oppNum;
    if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + "%";

    return (
      <div className="main">
        <p>支持人数:{supNum}人</p>
        <p>反对人数:{oppNum}人</p>
        <p>比例:{ratio}</p>
      </div>
    );
  }
}

export default VoteMain;
