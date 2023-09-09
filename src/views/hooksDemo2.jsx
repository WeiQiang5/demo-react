import { Button } from "antd";
import { useState } from "react";

/**
 * 函数组件的每一次渲染或者是更新,都是函数重新执行，产生一个全新的私有上下文
 *  + 内部的代码也需要重新执行
 *  + 涉及的函数需要重新的构建（是每一次执行DEMO产生的闭包）
 *  + 每一次执行DEMo函数，也会把useState重新执行
 *    + 执行useState，只有第一次，设置的初始值会生效，其余以后在执行，获取的状态都是最新的状态值「而不是初始值」
 *    + 返回的修改状态的方法，每一次都是返回一个新的
 *  + 是异步操作,可以通过flushSync()变成同步的
 * */
const Demo = function Demo() {
  let [num, setNum] = useState(0);
  const handle = () => {
    setNum(num + 10);
  };
  return (
    <>
      <span>{num}</span>
      <Button type="primary" size="small" onClick={handle}>
        新增
      </Button>
    </>
  );
};

export default Demo;
