import PropTypes from "prop-types";
import React from "react";
// console.log(React);
const DemoOne = function DemoOne(props) {
  let { className, style, title, children } = props;
  // console.log(x);
  // console.log("检测props是否被冻结===》", Object.isFrozen(props));
  // 需要对children类型做处理
  // 可以基于React.Children对象中提供的方法，对props.children进行处理
  // 好处：在这些方法内部，已经对children的各种形式做了处理
  // if (!children) {
  //   children = [];
  // } else if (!Array.isArray(children)) {
  //   children = [children];
  // }
  children = React.Children.toArray(children);

  return (
    <div className={`demo-box ${className}`} style={style}>
      {children[0]}
      <br />
      <h2>{title}</h2>
      <br />
      {children[1]}
    </div>
  );
};

/**
 * 通过把函数当做对象，设置静态的私有属性方法，来给其设置属性的校验规则
 */
DemoOne.defaultProps = {
  x: 0,
  title: "测试",
};
DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number,
};

export default DemoOne;
