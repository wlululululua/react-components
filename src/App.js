import Collapse from "./components/Collapse/Collapse";

const App = () => {
  return (
    <>
      <Collapse header="🤣">
        <h2>这是一个折叠面板</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quod ab ratione ex,
          provident minima nostrum nemo porro reprehenderit modi ut suscipit quam impedit
          aspernatur, sit sequi qui obcaecati id.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis exercitationem nostrum ipsa
          sint aspernatur odio minima voluptatem modi ratione perferendis?
        </p>
      </Collapse>
      <Collapse header="喜欢的水果😍">
        <ul>
          <li>🍇</li>
          <li>🍉</li>
          <li>🍓</li>
        </ul>
      </Collapse>
      <Collapse header="blahblahblah">
        <p>hhh</p>
      </Collapse>
    </>
  );
};

export default App;
