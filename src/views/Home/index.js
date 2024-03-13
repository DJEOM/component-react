import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  /* 测试路由传参 */

  const fn = (tempalte, id) => {
    // 1. url传参
    // navigate(`/use/${tempalte}?id=${id}`);
    // 2. state传参
    // navigate(`/use/${tempalte}`, { state: { id, age: 25 } });
    // 3. params传参(动态路由传参)
    navigate(`/use/${tempalte}/${id}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React状态管理专题：深入探讨组件组合——Component Composition</h2>
        <p>有以下几种方式实现状态管理:</p>
        {/* 三种跳转方式 */}
        {/* 1. a标签 */}
        {/* <a href="/use/props">1. 通过Props传递组件</a> */}
        {/* 2. Link */}
        {/* <Link to="/use/props">1. 通过Props传递组件</Link> */}
        {/* 3. 使用编程式跳转 */}
        <div style={{ cursor: "pointer" }} onClick={() => fn("props", "1")}>
          1. 通过Props传递组件
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => fn("children", "2")}>
          2. 利用children属性
        </div>
      </header>
    </div>
  );
}
