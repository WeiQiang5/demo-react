import { Button } from "antd";
import React, { useEffect, useRef, useState, useImperativeHandle } from "react";

/**
 * 使用useRef放在class动态组件上，会获取得到class实例对象
 * 使用useRef放在函数静态组件上，想要配合React.forwardRef使用，然后放在想要获取的DOM元素上，不配合React.forwardRef使用的话，就报错
 * 想要获取函数子组件内部中的状态和方法，想要forwardRef和useImperativeHandle结合使用
 * */

// class Child extends React.Component {
//   state = { x: 1000 };
//   render() {
//     return <div className="child-box">{this.state.x}</div>;
//   }
// }
// 函数子组件内部，也有自己的状态和方法,如何实现：基于forwardRef实现ref的同时，获取函数子组件内部的状态和方法了？
// useImperativeHandle
const Child = React.forwardRef((props, ref) => {
  console.log(ref); //在DEMO中，调用Child的时候，传递的ref对象
  let [text, setText] = useState("你好世界");
  const submit = () => {};
  useImperativeHandle(ref, () => {
    // 在这里返回的内容，都可以被父组件的ref对象获取到
    return {
      text,
      submit,
    };
  });
  return (
    <div className="child-box">
      <span ref={ref}>哈哈哈</span>
    </div>
  );
});

const Demo = () => {
  let x = useRef(null);
  let [num, setNum] = useState(0);

  useEffect(() => {
    console.log(x.current);
  }, []);

  return (
    <div>
      <Child ref={x} />
    </div>
  );
};

export default Demo;
