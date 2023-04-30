import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
        l<li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Travel Image" className='cards__item__img'/>
                </figure>
                <div className="cards__item__info"></div>
                <h5 className='cards__item__text'>{props.text}</h5>
            </Link>
        </li>

    </>
  )
}

export default CardItem
