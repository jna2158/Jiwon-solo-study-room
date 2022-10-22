import { useState } from "react";

function CreateList({ lis, setLis }) {
  const [value, setValue] = useState("");

  const submit = () => {
    setLis([...lis, { id: lis.length + 1, contents: value }]);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        value={value}
        placeholder="내용을 입력헤주세요."
        onChange={handleChange}
      ></input>
      <button disabled={value === ""} onClick={() => submit()}>
        submit
      </button>
    </>
  );
}

export default CreateList;
