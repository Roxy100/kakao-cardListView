import React from 'react';
import './Item.scss';

function Item({ type, imgURL, title, price }) {
  return (
    <li className={`item ${type}`}>
      <img alt='item' src={imgURL} />
      <div className='content'>
        <div>
          <p>{title}</p>
          <p className='price'>{`${price}원`}</p>
        </div>
        <button className='button' />
      </div>
    </li>
  );
}

export default Item;
