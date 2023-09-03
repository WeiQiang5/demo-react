import { Button } from "antd";
import React, { useState, useEffect, useRef } from "react";

/**
 * 类组件中，我们基于ref可以做的事情又：
 *  + 赋值给一个标签，获取DOm元素
 *  + 赋值给一个类子组件：获取子组件实例「可以基于实例调用子组件中的属性和方法等」
 *  + 赋值给一个函数子组件：报错「需要配合React.forwardRef实现ref转发，获取子组件中的一个DOM元素」
 *
 * ref的使用方法：
 *  + ref="box"  this.refs.box获取（不推荐使用，严格模式下报错）
 *  + ref = {x=>this.box=x} 将dom元素赋给类上
 *  + this.box = React.createRef() <h2 ref={this.box}></h2>  this.box.current获取dom
 */
let prev1, prev2;
const Demo = () => {
  let [num, setNum] = useState(0);
  let box1 = useRef(null),
    box2 = React.createRef();
  if (!prev1) {
    // 第一次DEMO执行，把第一次创建的ref对象赋值给变量
    prev1 = box1;
    prev2 = box2;
  } else {
    // 第二次DEMO执行，我们验证一下，新创建的ref对象，和之前第一次创建的ref对象是否一致
    console.log(prev1 === box1); //true useRef在每一次组件更新的时候，再次执行useRef方法的时候，不会创建新的ref对象了，获取到的还是第一次创建的那个ref对象
    console.log(prev2 === box2); //false createRef在每次组件更新的时候，都会创建一个全新的ref对象出来,比较浪费性能
    // 总结：在类组件中，创建ref对象，我们基于React.createRef处理；但是在函数组件中，为了保证性能，我们应该使用专属的useRef处理
  }

  useEffect(() => {
    console.log(box1.current);
    console.log(box2.current);
  }, []);

  return (
    <div>
      {/* <span ref={(x) => (box = x)}>{num}</span> */}
      <span ref={box1}>{num}</span>
      <span ref={box2}>{num}</span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        新增
      </Button>
    </div>
  );
};

// const Demo = () => {
//   let [num, setNum] = useState(0);
//   // 1.基于ref={函数}的方式可以,可以吧创建的DOM元素（或者子组件的实例）赋值给box变量「不推荐」
//   // let box;
//   // 2.基于React.createRef()创建ref对象来获取想要的内容 {current:DOM元素}
//   // let box = React.createRef();
//   // 3.函数组件中，还可以基于useRef hook函数，创建一个ref对象，不过只能在函数组件中使用
//   let box = useRef(null);
//   useEffect(() => {
//     console.log(box.current);
//   }, []);

//   return (
//     <div>
//       {/* <span ref={(x) => (box = x)}>{num}</span> */}
//       <span ref={box}>{num}</span>
//       <Button
//         type="primary"
//         size="small"
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         新增
//       </Button>
//     </div>
//   );
// };

export default Demo;
