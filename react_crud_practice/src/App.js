import "./App.css";

// list 컴포넌트
function List({ lis, onChangeMode }) {
  return (
    <>
      {lis.map((el) => {
        return (
          <div
            key={el.id}
            onClick={(event) => {
              event.preventDefault();
              onChangeMode();
            }}
          >
            {el.contents}
          </div>
        );
      })}
    </>
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
      <List
        lis={lis}
        onChangeMode={() => {
          alert("Header");
        }}
      ></List>
    </div>
  );
}

export default App;
