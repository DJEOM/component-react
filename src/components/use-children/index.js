import { useState } from "react";
// 通过children prop传递参数

// 总组件
function ParentComponent({ children }) {
  return <div>{children}</div>;
}

// 父组件
function ComponentOne({ children }) {
  return (
    <div>
      <p>
        这里是父组件ComponentOne，将ComponentTwo作为children，并在其内部渲染
      </p>
      {children}
    </div>
  );
}

// 子组件
function ComponentTwo({ data }) {
  return <h3>这里是子组件ComponentTwo接收的参数: {data}</h3>;
}

export default function App() {
  const [data, setData] = useState("初始参数");
  return (
    <>
      <ParentComponent>
        <ComponentOne>
          <ComponentTwo data={data} />
        </ComponentOne>
      </ParentComponent>
      <button onClick={() => setData(parseInt(Math.random() * 10) + 1)}>
        修改参数
      </button>
    </>
  );
}
