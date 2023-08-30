import { Button } from "antd";
import { useState } from "react";
import { flushSync } from "react-dom";
/**
 * useState自带了性能优化的机制：
 *  + 每一次修改状态值的时候，会拿最新要修改的值和之前的状态值做比较「基于Object.is判断」
 *  + 如果发现两次的值是一样的，则不会修改状态，也不会让视图更新「可以理解为：类似于React.PureComponent自动做了shouldComponet浅比较」
 *  + useState里面可以传入一个函数，用作惰性执行，因为初始值只会存在一次，如果得到的初始值方法在外面，哪怕执行，useState中也不会使用该初始值
 * */

const Demo = () => {
  console.log("更新");
  let [x, setX] = useState({
    a: 10,
    b: 11,
  });

  const handle = () => {
    for (let i = 0; i < 10; i++) {
      // 1.这里循环会放入队列中等待，所以执行一次，值为11
      // setX(x + 1);
      // 2.这里按道理强制更新队列,所以循环几次，更新几次但是值为11，因为取的是上一次闭包的值，但是handle方法只执行了一次
      // 但是里面做了优化，会将之前的值和当前值做对比，如果相同，就不会更新，因此变成2次
      flushSync(() => {
        setX({ ...x });
      });
    }
  };
  return (
    <div>
      <span>x:{x.a}</span>
      <span>y:{x.b}</span>
      <Button type="primary" size="small" onClick={handle}>
        点击
      </Button>
    </div>
  );
};

export default Demo;
