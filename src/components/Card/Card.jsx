import React from 'react'
import { Link } from 'react-router-dom'
import PriceSale from '../PriceSale/PriceSale';

const Card = ({ item, styleWidth }) => {

	return (
		<div style={{ width: styleWidth }} key={item.id} className='card'>
			<Link className="card__link" to={`/product/${item.id}`}>
				<img className='card__img' src={`../${item.image[Object.keys(item.image)[0]]}`} alt="" loading="lazy"
				/>
			</Link>
			<h3 className='card__title'>{item.title}</h3>
			<div className="card__sale">
				<PriceSale item={item} />
			</div>
			{
			item.inStock ?	<p className='card__instock'>{item.inStock}</p> : <p className='card__instock'>нет в наличие</p>
			}
		</div>
	)
}


export default Card