/**
 * react高阶组件：利用js中的闭包「柯理化函数」实现的组件代理
 *+ 我们可以在代理组件中，经过业务逻辑的处理，获取一些信息，最后基于属性等方案，传递给我们最终要渲染的组件
 * */

const Demo = (props) => {
  console.log("Demo中的属性=》", props);
  return <div className="home-box">我是Demo</div>;
};

// 执行ProxyTest方法，传递一个组件进来「Component接收」
const ProxyTest = function ProxyTest(Component) {
  return function HOC(props) {
    console.log(props);
    return <Component {...props} />;
  };
};

export default ProxyTest(Demo); //把函数执行的返回结果，基于es6module规范导出，供App使用
