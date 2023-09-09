import React from "react";
import ReactDOM from "react-dom/client";
// import DemoOne from "./views/DemoOne";
// import Dialog from "./views/components/Dialog";
// import Vote from "./views/Vote";
import Demo from "./views/hooksDemo4";
// 使用antd
import { ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ConfigProvider locale={zhCn}>
    <Demo />
  </ConfigProvider>
);

/**
 * render函数在渲染的时候，如果type是：
 *  +字符串：插件一个标签
 *  +普通函数：把函数执行，然后props传递给函数
 *  +构造函数：把构造函数基于new执行「也就是插件类的一个实例」，也会把解析出来的props传递进去
 * */
// root.render(
//   <>
//     <Vote title="react" />
//   </>
// );

// root.render(
//   <>
//     <Dialog title="友情提示" content="大家好。。。。"></Dialog>
//     <Dialog content="hello react">
//       <div slot="footer">
//         <button>确认</button>
//         <button>取消</button>
//       </div>
//     </Dialog>
//   </>
// );

// root.render(
//   <>
//     <DemoOne
//       title="我是标题"
//       x={10}
//       className="box"
//       style={{ fontSize: "20px" }}
//     >
//       <div>1</div>
//       <div>2</div>
//     </DemoOne>
//     <DemoOne x={10} className="box" style={{ fontSize: "20px" }}>
//       <div>3</div>
//     </DemoOne>
//     <DemoOne x={10} className="box" style={{ fontSize: "20px" }}></DemoOne>
//   </>
// );

// let obj = {
//   x: 10,
//   y: 20,
// };
// 冻结
// Object.freeze(obj);
// 密封
// Object.seal(obj);
// 不可扩展
// Object.preventExtensions(obj);
// console.log(Object.isExtensible());
// obj.x = 100;
// obj.z = 300;
// console.log(obj.x);
// console.log(obj.y);

/**
 * 需求一：基于数据的值，来判断元素的显示隐藏
 * */
// let flag = false,
//   isRun = true;

// root.render(
//   <>
//     {/* 控制元素的display样式:不论显示还是隐藏，元素本身都渲染出来了,也可以控制透明度 */}
//     <button style={{ display: flag ? "block" : "none" }}>按钮1</button>
//     <br />
//     {/* 控制元素渲染不渲染 */}
//     {flag ? <button>按钮2</button> : null}
//     <br />
//     <button>{isRun ? "正在接收..." : "立即提交注册"}</button>
//   </>
// );

/**
 * 需求二：
 *  从服务器获取了一组列表数据，循环动态绑定相关的内容
 * */
// let data = [
//   {
//     id: 1,
//     title: "adsa",
//   },
//   {
//     id: 2,
//     title: "gjsdf",
//   },
//   {
//     id: 3,
//     title: "dsjfksd",
//   },
// ];

// root.render(
//   <>
//     <h2 className="title">今日新闻</h2>
//     <ul className="news-box">
//       {data.map((item, index) => {
//         return (
//           <li>
//             <em>{index}</em>
//             &nbsp;&nbsp;
//             <span>{item.title}</span>
//           </li>
//         );
//       })}
//     </ul>
//     <br />
//     {/* 扩展需求，没有数组，就是想循环5次 */}
//     {new Array(5).fill(null).map((_, index) => {
//       return <buttron key={index}>按钮{index + 1}</buttron>;
//     })}
//   </>
// );
