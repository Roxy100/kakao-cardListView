import React from 'react';
import Item from './Item';
import './ItemList.scss';

function ItemList({ items, type }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          type={type}
          imgURL={item.item_img}
          title={item.content.item_title}
          price={item.content.item_price}
        />
      ))}
    </ul>
  );
}

export default ItemList;
