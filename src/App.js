import Collapse from "./components/Collapse/Collapse";

const App = () => {
  return (
    <>
      <Collapse header="π€£">
        <h2>θΏζ―δΈδΈͺζε ι’ζΏ</h2>
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
      <Collapse header="εζ¬’ηζ°΄ζπ">
        <ul>
          <li>π</li>
          <li>π</li>
          <li>π</li>
        </ul>
      </Collapse>
      <Collapse header="blahblahblah">
        <p>hhh</p>
      </Collapse>
    </>
  );
};

export default App;
