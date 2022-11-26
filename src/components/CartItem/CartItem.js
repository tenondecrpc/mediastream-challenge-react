  export const CartItem = ({item, incrementQuantity, decrementQuantity}) => {
    return (
      <li className="movies__cart-card">
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
        <div className="movies__cart-card-quantity">
          <button onClick={decrementQuantity}>
            -
          </button>
          <span>
            {item.quantity}
          </span>
          <button onClick={incrementQuantity}>
            +
          </button>
        </div>
      </li>
    );
  };