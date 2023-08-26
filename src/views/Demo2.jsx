import React from "react";

/**
 * PureComponent和Component的区别：
 *   PureComponent会给类组件默认加一个shouldComponentUpdate周期函数
 *    + 在此周期函数中，它对新老的属性/状态 会做一个浅比较
 *    + 如果经过浅比较，发现属性和状态并没有改变，则返回false「也就是不更新组件」，有变化才更新
 * */

// 检测是否为对象
const isObject = function isObject(obj) {
  return obj !== null && /^(object|function)/.test(typeof obj);
};
// 对象浅比较的方法
const shallowEqual = function shallowEqual(a, b) {
  if (!isObject(a) || !isObject(b)) return false;
  if (a === b) return true;
  // 先比较成员的数量
  let keysA = Reflect.ownKeys(a),
    keysB = Reflect.ownKeys(b);
  if (keysA.length !== keysB.length) return false;
  // 数量一致，再比较内部的成员「只比较一级：浅比较」
  for (let i = 0; i < keysA.length; i++) {
    let key = keysA[i];
    // 如果一个对象中有这个成员，一个对象中没有，或者都有这个成员，但是成员值不同，为false
    // 这里使用Object.is是考虑到NaN===NaN为false
    console.log(Object.is(a[key], b[key]));
    if (!b.hasOwnProperty(key) || !Object.is(a[key], b[key])) {
      return false;
    }
  }
  return true;
};

class Demo extends React.PureComponent {
  state = {
    arr: [10, 20, 30],
  };
  render() {
    let { arr } = this.state;
    console.log(this);
    return (
      <div>
        {arr.map((item, index) => {
          return (
            <span
              key={index}
              style={{
                display: "inline-block",
                width: 100,
                height: 100,
                background: "pink",
                marginRight: 10,
              }}
            >
              {item}
            </span>
          );
        })}
        <br />
        <button
          onClick={() => {
            arr.push(40);
            console.log(arr);
            // this.setState({
            //   arr,
            // });//这样写无法更新
            /**
             * 1.解决办法:this.forceUpdate()
             * 2.赋值新数组，改变地址
             * */
            // this.forceUpdate();//会跳过shouldComponentUpdate
            this.setState({
              arr: [...arr],
            });
          }}
        >
          新增SPAN
        </button>
      </div>
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   let { props, state } = this;
  //   // props/state修改之前到属性状态
  //   // nextProps/nextState将要修改的属性状态
  //   return !shallowEqual(props, nextProps) || !shallowEqual(state, nextState);
  // }
}

export default Demo;
