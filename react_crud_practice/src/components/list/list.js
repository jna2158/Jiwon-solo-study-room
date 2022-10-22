function List({ lis, onChangeMode, setClickItem }) {
  return (
    <ol>
      {lis.map((el) => {
        return (
          <li
            key={el.id}
            onClick={() => {
              setClickItem(el);
              onChangeMode("update");
            }}
          >
            {el.contents}
          </li>
        );
      })}
    </ol>
  );
}

export default List;
