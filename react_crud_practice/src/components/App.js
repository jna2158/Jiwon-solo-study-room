import Header from "./header/header";
import List from "./list/list";
import CreateList from "./create-list/CreateList";
import UpdateList from "./update-delete-list/UpdateDeleteList";
import { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("read");
  const [lis, setLis] = useState([
    { id: 1, contents: "list1" },
    { id: 2, contents: "list2" },
    { id: 3, contents: "list3" },
  ]);
  let [clickItem, setClickItem] = useState(null);

  const onChangeMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      <Header onChangeMode={onChangeMode} />
      <List lis={lis} onChangeMode={onChangeMode} setClickItem={setClickItem} />
      {mode === "create" && <CreateList lis={lis} setLis={setLis} />}
      {mode === "update" && (
        <UpdateList
          lis={lis}
          setLis={setLis}
          clickItem={clickItem}
          setMode={setMode}
        />
      )}
      {mode === "read" && (
        <button
          onClick={() => {
            onChangeMode("create");
          }}
        >
          create
        </button>
      )}
    </>
  );
}

export default App;
