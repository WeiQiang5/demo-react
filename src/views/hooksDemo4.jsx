import { Button } from "antd";
import { useEffect, useState } from "react";

/**
 * useEffect:在函数组件中，使用生命周期函数
 *  useEffect(callback)
 *    + 第一次渲染完毕后，执行callback，等价于componentDidMount
 *    + 在组件每一次更新完毕后，也会执行callback，等价于componentDidUpdate
 *  useEffect(callback,[])
 *    + 只有第一次渲染完毕后，才会执行callback，每一次视图更新完毕后面，callback不在执行
 *    + 类似于componentDidMount
 *  useEffect(callback,[依赖状态（多个用逗号分隔）])
 *    + 第一次渲染完毕执行calback
 *    + 当依赖的状态值（或者多个依赖状态中的一个）发生改变，也会执行
 *    + 但是依赖的状态如果没有变化，在组件更新的时候，callback不会执行
 *  useEffect(() => {
      return () => {
        console.log("@4");
      };
    });
      + 返回的小函数，会在组件释放的时候执行
      + 小函数里面的状态获取的是上一次的状态
 */

const Demo = () => {
  console.log("更新");
  let [num, setNum] = useState(0),
    [x, setX] = useState(100);

  // 1.
  useEffect(() => {
    // 获取最新的状态值
    console.log("@1", num);
  });
  // 2
  useEffect(() => {
    // 获取最新的状态值
    console.log("@2", num);
  }, []);
  // 3
  useEffect(() => {
    // 获取最新的状态值
    console.log("@3", num);
  }, [num]);
  // 4
  useEffect(() => {
    return () => {
      console.log("@4", num);
    };
  }, [num]);

  const handle = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <span className="num">{num}</span>
      <Button type="primary" size="small" onClick={handle}>
        点击{" "}
      </Button>
    </div>
  );
};

export default Demo;
