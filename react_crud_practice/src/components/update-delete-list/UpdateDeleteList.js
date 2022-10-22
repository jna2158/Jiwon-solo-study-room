import { useState } from "react";

function UpdateList({ clickItem, lis, setLis, setMode }) {
  const [newValue, setNewValue] = useState(clickItem.contents);

  const handleClickUpdate = () => {
    let newLis = [...lis];
    newLis[clickItem.id - 1].contents = newValue;
    setLis([...newLis]);
    setNewValue("");
    setMode("read");
  };

  const handleClickDelete = () => {
    if (window.confirm("정말로 삭제하시겠어요?")) {
      let deletedLis = [...lis];
      deletedLis.splice(clickItem.id - 1, 1);
      setLis([...deletedLis]);
    }
    setMode("read");
  };

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <>
      <input value={newValue} onChange={handleChange}></input>
      <button onClick={() => handleClickUpdate()}>update</button>
      <button onClick={() => handleClickDelete()}>delete</button>
    </>
  );
}

export default UpdateList;
