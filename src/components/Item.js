import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(true);

  function handleClick() {
    setCart(!inCart);
  }

  const changeLi = inCart ? "Remove From Cart" : "in-cart";

  return (
    <li className={changeLi}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{!inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
