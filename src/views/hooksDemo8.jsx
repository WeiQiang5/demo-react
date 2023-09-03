import { Button } from "antd";
import React, { useCallback, useState } from "react";
import "../scss/Demo.scss";

// 子组件
// class Child extends React.PureComponent {
//   render() {
//     console.log("Child render");
//     return <div>我是子组件</div>;
//   }
// }
// 子组件
const Child = React.memo(function Child(props) {
  console.log("Child render");
  return <div>我是子组件</div>;
});

// 父组件
/**
 * 诉求：当父组件更新的时候，因为传递给子组件的属性仅仅是一个函数「特点：基本应该算是不变的」
 * 所以不想再让子组件也跟着更新了
 *  + 第一条：传递给子组件的属性（函数），每一次需要时相同堆内存地址基于useCallback
 *  + 第二条：在子组件内部也要做一个处理，验证父组件传递的属性是否发生改变，如果没有变化，则让子组件不能更新，有变化才需要更新
 *    + 类组件使用React.PureComponent
 *    + 函数子组件使用React.memo
 * */
const Demo = () => {
  let [x, setX] = useState(0);
  // const handle = () => {};
  const handle = useCallback(() => {}, []);

  return (
    <div className="vote-box">
      <Child handle={handle} />
      <div className="main">
        <p>{x}</p>
      </div>
      <div className="footer">
        <Button type="primary" onClick={() => setX(x + 1)}>
          累加
        </Button>
      </div>
    </div>
  );
};

// let prev;
// const Demo = () => {
//   let [x, setX] = useState(0);

//   // 第一次：0x001,第二次:0x101,每一次更新都会重新创建
//   // const handle = () => {}
//   /**
//    * const xxx = useCallback(callback,[dependencies])
//    *  + 组件第一次渲染usecallback执行，创建一个函数callback赋值给xxx
//    *  + 组件后续每一次更新，判断依赖的状态值是否改变，如果改变，则重新创建新的函数堆，但是如果
//    *    依赖的状态没有更新「或者没有设置依赖，则xxx获取的一直是第一次创建的函数堆，不会创建新的函数出来」
//    *  + 或者说，基于useCallback，可以始终获取第一次创建函数的堆内存地址
//    *  + useCallback不要乱用，并不是所有组件内部的函数，都拿其进行处理会更好
//    *    + 虽然减少了堆内存的开辟
//    *    + 但是useCallback本身也有自己的处理逻辑和缓存的机制，这个也消耗时间
//    * */
//   const handle = useCallback(() => {}, []);
//   if (!prev) {
//     prev = handle;
//   } else {
//     console.log(prev === handle); //false
//   }

//   return (
//     <div className="vote-box">
//       <div className="main">
//         <p>{x}</p>
//       </div>
//       <div className="footer">
//         <Button type="primary" onClick={() => setX(x + 1)}>
//           累加
//         </Button>
//       </div>
//     </div>
//   );
// };

export default Demo;
