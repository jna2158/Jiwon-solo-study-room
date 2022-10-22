function Header({ onChangeMode }) {
  return (
    <h1
      onClick={(event) => {
        event.preventDefault();
        onChangeMode("read");
      }}
    >
      Welcome
    </h1>
  );
}

export default Header;
