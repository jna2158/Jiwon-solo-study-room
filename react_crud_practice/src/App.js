import "./App.css";

function List({ lis }) {
  return (
    <ul>
      {lis.map((el) => {
        return <li key={el.id}>{el.contents}</li>;
      })}
    </ul>
  );
}

function App() {
  const lis = [
    { id: 1, contents: "list1" },
    { id: 2, contents: "list2" },
    { id: 3, contents: "list3" },
  ];

  return (
    <div>
      <List lis={lis}></List>
    </div>
  );
}

export default App;
