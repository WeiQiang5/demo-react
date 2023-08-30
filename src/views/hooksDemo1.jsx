import React, { useState } from "react";
import { Button } from "antd";

/**
 * useState React Hook函数之一，目的是函数组件中使用状态,并且后期基于状态的修改，可以让组件更新
 * let xxx = useState(initialValue)
 *   + 执行useState,传递的initialValue是初始的状态值
 *   + 执行这个方法，返回结果是一个数组【状态值，修改状态的方法】
 * 函数组件「hooks组件」，没有实例概念，不涉及this处理
 * */
const Demo = function Demo(props) {
  let [num, setNum] = useState(0);

  const handleClick = () => {
    num = num + 10;
    setNum(num);
  };

  return (
    <div>
      <span>{num}</span>
      <Button type="primary" size="samll" onClick={handleClick}>
        新增
      </Button>
    </div>
  );
};

// class Demo extends React.Component {
//   state = { num: 0 };
//   handleClick = () => {
//     let { num } = this.state;
//     this.setState({
//       num: num + 10,
//     });
//   };
//   render() {
//     let { num } = this.state;
//     return (
//       <div>
//         <span>{num}</span>
//         <Button type="primary" size="samll" onClick={this.handleClick}>
//           新增
//         </Button>
//       </div>
//     );
//   }
// }

export default Demo;
