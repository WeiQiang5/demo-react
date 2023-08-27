import React from "react";

/**
 * 受控组件：基于修改数据，让视图更新，达到需要的效果「推荐」
 * 非受控组件：基于ref获取DOM元素，我们操作DOM元素，来实现需求和效果
 *  基于ref获取DOM元素的语法
 *    1.给需要获取的元素设置ref='xxx',后期基于this.refs.xx去获取相应的DOM元素「不推荐,在严格模式下会报错」
 *    2.把ref属性值设置为一个函数
 *      + ref={x=>this.xxx=x}
 *      + x是函数的形参，就是当前DOM元素
 *      + 然后我们获取的DOM元素x直接挂在到实例的某个属性上（例如：box2）
 *    3.基于React.createRef()方法创建一个ref对象=》{current:null}
 *      + ref={REF对象}
 *      + 获取：this.xxx.current
 *
 * 原理：在render渲染的时候，会获取virtualDOm的ref属性，
 * + 如果属性值是一个字符串，则会给this.refs增加这样的一个成员，成员值就是当前的DOM元素
 * + 如果属性值是一个函数，则会把函数执行，把当前DOM元素传递给这个函数「x=》DOM元素」，而在函数
 * 内部，我们一般都会把DOM元素直接挂在实例的某个属性上
 * + 如果属性值是一个REF对象，则会把DOM元素赋值给对象的current属性
 * */

class Demo extends React.Component {
  box3 = React.createRef();
  render() {
    return (
      <div>
        <h2 className="title" ref="titleBox">
          温馨提示
        </h2>
        <h2 className="title" ref={(x) => (this.box2 = x)}>
          友情提示提示
        </h2>
        <h2 className="title" ref={this.box3}>
          提示
        </h2>
      </div>
    );
  }
  componentDidMount() {
    // 第一次渲染完毕「virtualDOM已经变成真实DOM」，此时我们可以获取需要操作的DOM数据
    // console.log(document.querySelector(".title"));
    console.log(this.refs.titleBox);
    console.log(this.box2);
    console.log(this.box3);
  }
}

export default Demo;
