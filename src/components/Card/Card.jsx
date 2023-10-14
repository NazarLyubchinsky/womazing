import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import PriceSale from '../PriceSale/PriceSale';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ item, styleWidth }) => {
	const { t } = useTranslation();

	return (
		<div style={{ width: styleWidth }} key={item.id} className={`card ${styleWidth}`} >
			<Link className="card__link" to={`/product/${item.id}`}>
				<LazyLoadImage style={{ width: '100%', height: '100%' }}
					className='card__img'
					alt={item.title}
					src={`../${item.image[Object.keys(item.image)[0]]}`}
					effect='blur'
				/>
				{/* <img className='card__img'  src={`../${item.image[Object.keys(item.image)[0]]}`} alt="" /> */}
			</Link>
			<h3 className='card__title'>{item.title}</h3>
			<div className="card__sale">
				<PriceSale item={item} />
			</div>
			{
				item.inStock ? <p className='card__instock'>{t("separate.inStock")}: {item.inStock}</p> : <p className='card__instock'>{t("separate.notStock")}</p>
			}
		</div>
	)
}


export default Card