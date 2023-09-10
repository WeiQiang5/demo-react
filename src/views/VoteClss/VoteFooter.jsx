import React from "react";
import ThemeContext from "@/ThemeContext";
/**
 * 后代类组件获取上下文中的方法
 * 方案二
 * + 导入创建的上下文对象
 * + 使用<ThemeContext.Consumer，里面调用函数，参数为上下文
 * + 在参数context属性上，存了上下文中的所有信息
 * */
class VoteFooter extends React.PureComponent {
  render() {
    console.log("更新");
    return (
      <ThemeContext.Consumer>
        {(context) => {
          let { change } = context;
          return (
            <div className="footer">
              <button onClick={change.bind(null, "sup")}>支持</button>
              <button onClick={change.bind(null, "opp")}>反对</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default VoteFooter;
