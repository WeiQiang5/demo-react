// 实现redux部分源码
export const createStore = function createStore(reducer) {
  if (typeof reducer !== "function") {
    throw new Error("Reducer must be a function");
  }
  let state, //存放公共状态
    listeners = []; //存放事件池

  // 获取公共状态
  const getState = function getState() {
    return state;
  };
  // 向事件池中加入让组件更新的方法
  const subscribe = function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error("listener is not a function");
    }
    if (!listener.includes(listener)) {
      listeners.push(listener);
    }
    // 返回一个从事件池中，移除方法的函数
    return function unsubscribe() {
      let i = listeners.findIndex((item) => item === listener);
      listeners.splice(i, 1);
    };
  };
  // 派发任务通知reducer执行
  const dispatch = function dispatch(action) {
    if (action === null && typeof action !== "object") {
      throw new Error("action must be an object");
    }
    if (typeof action.type === "undefined") {
      throw new Error("action may not have an undefined 'type' property");
    }
    // 把reducer执行 传递：公共状态，行为对象;接收执行的返回值,替换公共状态
    state = reducer(state, action);
    // 当状态更改，我们还需要把事件池执行
    listeners.forEach((listener) => listener());
    return action;
  };

  // redux内部会默认进行一次dispatch派发，目的：给公共容器中的状态赋值初始值
  let randomString = function randomString() {
    return Math.random().toString(36).substring(7).split("").join(".");
  };

  dispatch({
    type: "@@redux/INIT" + randomString(),
  });

  return {
    getState,
    subscribe,
    dispatch,
  };
};
