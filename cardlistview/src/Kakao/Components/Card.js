import React from 'react';
import ItemList from './ItemList';
import './Card.scss';

function Card({ imgURL, detail, itemList }) {
  return (
    <article className='card'>
      <div className='cardImg'>
        <img alt='cardImg' src={imgURL} />
      </div>
      <div className='cardMain'>
        <div className='status'>
          <span className={detail.status}>{detail.status}</span>
        </div>
        <h3>{detail.title}</h3>
        <div>
          <p>{detail.content}</p>
        </div>
      </div>
      {itemList && <ItemList items={itemList.items} type={itemList.type} />}
    </article>
  );
}

export default Card;
