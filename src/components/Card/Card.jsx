import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
	const { i18n } = useTranslation();

	const currensy = i18n.language === 'ua' ? 'Грн' : '$'
	const price = i18n.language === 'ua' ? item.price * 38 : item.price
	return (
		<div key={item.id} className='card'>
			<Link className="card__link" to={`/product/${item.id}`}>
				<img className='card__img' src={`../${item.image.black}`} alt="" />
			</Link>
			<h3 className='card__title'>{item.title}</h3>
			{item.priceSale ? (
				<div className='card__price'>
					<p  className='card__price-sale' style={{ textDecoration: 'line-through' }}>
						{price} {currensy}
					</p>
					<p className='card__price-sale'>
						/
					</p>
					<p className='card__price-sale'>
						{i18n.language === 'ua' ? item.priceSale * 38 : item.priceSale} {currensy}
					</p>
				</div>
			) : (
				<>
					<span className='card__price-sale'> {price}</span>
					<span className='card__price-sale'> {currensy}</span>
				</>
			)}
		</div>

	)
}

export default Card