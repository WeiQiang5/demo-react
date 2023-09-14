import { createStore } from "redux";

/**
 * 管理员：修改store容器中的公共状态
 * */
let initial = {
  supNum: 10,
  oppNum: 5,
};
const reducer = function reducer(state = initial, action) {
  // state存store容器中公共状态「最开始没有的时候，赋值初始值」
  // action每一次基于dispatch派发的时候，传递进来的行为对象「要求具备type属性，存派发的行为标识」
  // 未来接下来的操作，我们操作state，不会直接修改容器中的状态「要等到最后return的时候」我们需要先克隆
  state = { ...state };
  // 接下来我们需要基于派发的行为标识，修改store容器中的公共状态
  switch (action.type) {
    case "VOTE_SUP":
      state.supNum++;
      break;
    case "VOTE_OPP":
      state.oppNum++;
      break;
    default:
  }
  // return的内容，会整体替换store容器中的内容
  return state;
};

// 创建store公共容器
const store = createStore(reducer);

export default store;
