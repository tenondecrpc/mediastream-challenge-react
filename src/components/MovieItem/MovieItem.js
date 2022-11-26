  export const MovieItem = ({ item, addCart }) => {
    return (
      <li className="movies__list-card">
        <ul>
          <li>
            ID: {item.id}
          </li>
          <li>
            Name: {item.name}
          </li>
          <li>
            Price: ${item.price}
          </li>
        </ul>
        <button onClick={addCart}>
          Add to cart
        </button>
      </li>
    );
  };