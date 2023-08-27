import React from "react";

/**
 * 给元素标签设置ref，目的：获取对应的DOM元素
 * 给类组件设置ref，目的：获取当前调用组件创建的实例「后续可以根据实例获取子组件中的相关信息」
 * 给函数组件设置ref，直接报错Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
 *   + 但是我们可以让其配合，React.forwardRef， 实现ref的转发
 *   + 目的：获取函数组件内部的某个元素
 * */

class Child1 extends React.Component {
  state = {
    x: 100,
    y: 200,
  };
  render() {
    return <div ref={(x) => (this.emBox = x)}>子组件1</div>;
  }
}

const Child2 = React.forwardRef(function Child2(props, ref) {
  console.log(ref); //我们调用child2点时候，设置的ref属性值「函数」
  // =》 x => this.child2 = x
  return (
    <div>
      子组件2
      <button ref={ref}>按钮</button>
    </div>
  );
});

class Demo extends React.Component {
  box3 = React.createRef();
  render() {
    return (
      <div>
        <Child1 ref={(x) => (this.child1 = x)} />
        <Child2 ref={(x) => (this.child2 = x)} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.child1); //存的是子组件的实例对象
    // console.log(this.child2); //存的是子组件内部的dom元素
  }
}

export default Demo;
