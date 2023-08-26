// /**
//  * 插件类组件
//  * 1.创建一个构造函数，要求必须继承React.Component/PureComponent这个类
//  *  +
//  * */

import React from "react";
import PropTypes from "prop-types";

/**
 * 从调用类组件开始，组件内部发生的事情
 * 1.规则校验后再初始化属性
 *  方案一：
 *    constructor(props){
 *      super(props)//会把传递来的属性挂载到this实例上
 *      console.log(this.props)//获取传递的属性
 *    }
 *   方案二：
 *    即便我们组件不在constructor中处理「甚至constructor都没写」，在constructor处理完毕后面，react内部也会将传递的props挂载到实例上
 *    所以在其他函数中，只要保证this是实例，就可以基于this.props获取传递的属性
 *      +同样this.props获取的属性对象也是被冻结的
 *   设置规则校验
 * 2.初始化状态
 *  状态：后期修改状态，可以出发视图的更新
 *  需要手动初始化，如果我们没有去做相关的处理，则默认会往实例上挂载一个state,初始值是null
 *  -------修改状态，控制视图更新
 * this.state.xxx = xxx;这种操作仅仅是修改了状态值，但是无法让视图更新
 * 想让视图更新，我们需要基于React.Component.prototype提供的方法操作
 * @1 this.setState(partialState),既可以修改状态，也可以让视图更新
 *    partialState:部分状态
 *    this.setState({
 *      xxx:xxx
 *    })
 * @2 this.forceUpdate()强制更新
 *3.触发周期函数(钩子函数)在程序运行到某个阶段，我们可以基于提供一个处理函数，让开发者在这个阶段做一些自定义的事情
    componentWillMount 
      +此周期函数，目前是不安全的，未来可能移除，
      +会抛出警告
      +可以使用UNSAFF_componentWillMount不抛出警告
      +如果开启了React.StrictMode「严格模式」,则我们使用UNSAFF_componentWillMount会抛出红色警告错误
 * */
class Vote extends React.Component {
  // 属性的规则校验
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    num: PropTypes.number,
    title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super();
    console.log(this.props);
  }

  // 初始化状态
  state = {
    supNum: 10,
    oppNum: 5,
  };
  render() {
    console.log(this.props);
    let { supNum, oppNum } = this.state;
    return (
      <div className="vote-box">
        <div className="header">
          <h2 className="title">标题</h2>
          <span>{(supNum, oppNum)}人</span>
        </div>
        <div className="main">
          <p>支持人数:{supNum}人</p>
          <p>反对人数:{oppNum}人</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              this.setState({
                supNum: supNum + 1,
              });
              console.log(supNum);
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              // this.state.oppNum++;
              // this.forceUpdate();
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }
}

export default Vote;

// class Parent {
//   constructor(x, y) {
//     this.total = x + y;
//   }
//   num = 200; //等价于this.num = 2000给实力再这是私有属性
//   getNum = () => {
//     // 箭头函数没有this，所用到的this是宿主环境中的
//     console.log(this);
//   };
//   sum() {
//     // 类似于sum = function sum(){}不是箭头函数
//     // 它是给Parent.prototype上设置公共的方法「sum函数是不可枚举的」
//   }
//   // 这个相当于把构造函数看成一个普通对象，为其设置静态的私有属性方法 Parent.xxx
//   static avg = 1000;
//   static average() {}
// }

// Parent.prototype.y = 2000; //在外部手动给构造函数原生上设置公共的属性

// let p = new Parent(10, 20);
// console.log(p);
// console.dir(Parent);

/**
 * 基于extends实现继承
 * 1.首先基于call继承，React.Component.call(this) this=>Parent类的实例
 *   function Component(props,context,updater){}
 *   给创建的实例P设置四个私有属性：props,context,refs,updater
 * 2.基于原型继承 Parent.prototype.__proto__ = React.Component.prototype =>Object.prototype
 *   实例除了具备Parent.prototype提供的方法之外，还具备了React.Component.prototype原型上提供的方法:isReactComponent,setState,forceUpdate
 *   只要自己设置了constructor，则内部第一句话一定要执行super()
 *  */
// class Parent extends React.Component {
//   constructor(n, m) {
//     super(); //等价于React.COmponent.call(this)
//   }
//   x = 100;
//   getX() {}
// }
