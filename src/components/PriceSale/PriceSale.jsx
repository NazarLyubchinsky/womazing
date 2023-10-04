import React from 'react'
import { useTranslation } from 'react-i18next';

const PriceSale = ({ item }) => {
	const { i18n } = useTranslation();
	const isUa = i18n.language === 'ua';

	const currensy = isUa ? 'Грн' : '$';
	const price = isUa ? item.price * 38 : item.price;

	return (
		<>
			{item.priceSale ? (
				<div className='price'>
					<p className='price__sale' style={{ textDecoration: 'line-through' }}>
						{price} {currensy}
					</p>
					<p className='price__sale'>
						/
					</p>
					<p className='price__sale'>
						{isUa ? item.priceSale * 38 : item.priceSale} {currensy}
					</p>
				</div>
			) : (
				<>
					<span className='price__sale'> {price}</span>
					<span className='price__sale'> {currensy}</span>
				</>
			)}
		</>
	)
}

export default PriceSale