function ListGroup() {
  let items = [
    "New York",
    "Odessa",
    "Tejocotillos",
    "La Manga",
    "Santa Maria Tomatlan",
  ];

  items = [];

  return (
    <>
      <h1>List</h1>
      {/*       {items.length === 0 && <p>No items found</p>}
       */}{" "}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
