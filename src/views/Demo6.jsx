import React from "react";

/**
 * react合成事件处理原理
 * 在组件渲染的时候，如果发现JSX元素属性中有onXxx/onXxxCapture这样的属性，不会给当前元素直接做事件绑定，只是把绑定的方法赋值
 * 给元素的相关属性，例如：
 *   + outer.onClick=() => {console.log("outer 冒泡「合成」")}
 *   + outer.onClick=() => {console.log("outer 捕获「合成」")}
 *   + inner.onClick=() => {console.log("inner冒泡 「合成」")}
 *   + inner.onClick=() => {console.log("inner捕获 「合成」")}
 */

class Demo extends React.Component {
  state = {
    x: 0,
  };
  handle = () => {};
  // 基于react内部处理，如果我们给合成事件绑定一个普通函数，当事件行为处罚，绑定的函数执行，为undefined
  // 解决方案：+ 可以onClick={this.handle.bind(this)}
  // 也可以使用箭头函数
  // handle(){
  //   console.log(this)
  // },
  render() {
    /**
     * bind在react事件绑定中的运用
     *  + 绑定的方法是一个普通函数，需要改变函数中的this是实例，此时需要用到bind「一般都是箭头函数」
     *  + 想给函数传递指定的实参，可以基于bind预先处理「bind会把事件对象以最后一个实参传入」
     * */
    return (
      <div>
        <button onClick={this.handle}>按钮</button>
      </div>
    );
  }
}

export default Demo;
