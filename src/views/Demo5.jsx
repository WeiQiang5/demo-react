import React from "react";
// flushSync是可以刷新updater更新队列，也就是让修改状态的人物立即批处理一次
import { flushSync } from "react-dom";

/**
 * this.setState(partialState,callback)
 *   + partialState部分状态更改
 *     this.setState({
 *       x:100//不论总共有多少状态，我们只修改了x，其余的状态不懂
 *     })
 *   + callback:在状态更改，视图更新完毕后触发执行「也可以说只要执行了setState,callback一定会执行」
 *     发生在componentDidUpdate周期函数发生之后「DidUpdate会在如何状态更改后触发执行，而回调函数，可以在指定状态更新后处理一些事情」
 *     特殊：即便我们基于shouldComponentUpdate组织了状态/视图的更新，DidUpdate周期函数肯定不会执行，但是我们设置的这个callback
 *     回调函数依然会被触发执行
 *   + 类似于Vue框架中的$nextTick
 *   + 在React18中，setState在任何地方执行，都是异步操作
 *     React18中有一套更新队列的机制
 *     基于异步操作，实现状态的批处理
 *     好处：
 *        减少视图更新的次数，降低渲染消耗的性能
 *        让更新的逻辑和流程更清晰稳健
 *   + 当增加定时器时，先执行定时器外面的this.setState(),如果设置的定时器时间一样，则合并为一次视图渲染,以及相差时间不大，也算一次
 *   + 在react18中，setState操作都是异步的「无论是在哪执行，例如：合成事件，周期函数，定时器」
 *     目的：实现状态的批处理
 *        + 有效减少更新次数，降低性能消耗
 *        + 有效管理代码执行的逻辑顺序
 *        + 。。。
 *     原理：利用了更新「updater」机制来处理的
 *        + 在当前相同的时间段内「浏览器此时可以处理的事情中」，遇到setState会立即放入到updater更新队列中
 *        + 此时状态/视图还未更新
 *        + 当所有的代码操作结束，会“刷新队列”「通知更新队列中的人物执行」：把所有放入的setState合并在一起执行，只触发一次视图更新「批处理」
 */

class Demo extends React.Component {
  state = {
    x: 10,
    y: 5,
    z: 0,
  };
  handle = () => {
    // this => 实例
    let { x, y, z } = this.state;
    // 同时修改3个状态值，只会触发一次视图更新
    // this.setState({
    //   x: x + 1,
    //   y: y + 1,
    //   z: z + 1,
    // });

    // setTimeout(() => {
    //   this.setState({ x: x + 1 });
    //   console.log("x", this.state.x, this.state.y, this.state.z);
    // }, 1000);
    // setTimeout(() => {
    //   this.setState({ y: y + 1 });
    //   console.log("y", this.state.x, this.state.y, this.state.z);
    // }, 1000);
    // console.log(this.state.x, this.state.y);
    // setTimeout(() => {
    //   this.setState({ z: z + 1 });
    //   console.log("z", this.state.x, this.state.y, this.state.z);
    // }, 500);
    // 用于同时操作状态，想要z在x和y之后立即执行
    // this.setState({ x: x + 1 });
    // console.log("flushSync之前", this.state); //10/5/0
    // flushSync(() => {
    //   this.setState({ y: y + 1 });
    //   console.log("flushSync内", this.state); //10/5/0
    // });
    // console.log("flushSync之后", this.state); //10/5/0
    // // 在修改z之前，要保证x/y都已经更改和让视图更新了
    // this.setState({ z: this.state.x + this.state.y });

    for (let i = 0; i < 20; i++) {
      // 更新一次，最后结果20
      this.setState((nextValue) => {
        return {
          x: nextValue.x + 1,
        };
      });
      // 更新20次，最后结果20
      // flushSync(() => {
      //   this.setState({
      //     x: this.state.x + 1,
      //   });
      // });
      // 这里更新1次，答案1
      // this.setState({
      //   x: this.state.x + 1,
      // });
    }
  };
  render() {
    console.log("视图渲染:render");
    let { x, y, z } = this.state;
    return (
      <div>
        x:{x} - y:{y} - z:{z}
        <br />
        <button onClick={this.handle}>按钮</button>
      </div>
    );
  }
}

export default Demo;
