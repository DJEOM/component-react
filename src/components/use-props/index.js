import { useState } from "react";
// 子组件
function ComponentTwo({ data }) {
  return <h3>这里是子组件ComponentTwo接收的参数: {data}</h3>;
}

// 父组件
function ComponentOne({ ComponentTwo }) {
  return (
    <div>
      <p>
        这里是父组件ComponentOne，接收子组件ComponentTwo作为prop，并在其内部渲染
      </p>
      {ComponentTwo}
    </div>
  );
}

export default function App() {
  const [data, setData] = useState("初始参数");
  return (
    <div>
      <ComponentOne ComponentTwo={<ComponentTwo data={data} />} />
      <button onClick={() => setData(parseInt(Math.random() * 10) + 1)}>
        修改参数
      </button>
    </div>
  );
}
