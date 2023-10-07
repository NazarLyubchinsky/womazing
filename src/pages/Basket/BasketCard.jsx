import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ImCross } from 'react-icons/im'
import { CustomContext } from '../../utils/Context';
import PriceSale from '../../components/PriceSale/PriceSale'
import { useTranslation } from 'react-i18next';

const BasketCard = ({ item }) => {
	const { deleteCart, updateCart, product } = useContext(CustomContext);
	const [count, setCount] = useState(item.count);
	const { i18n } = useTranslation();

	const sumAllOneProduct = item.inStock >= item.count ? item.price * +item.count : item.price * item.count;
	return (

		<div className="basket__product">
			<div className='basket__product-left'>
				<p className='basket__product-mark' onClick={() => deleteCart(item.id, item.color, item.size)}><ImCross /></p>
				<Link className='shop__card-link' to={`/product/${item.id}`}>
					<img className='basket__product-img' src={item.image[item.color]} alt={item.title} />
				</Link>
				<p className='basket__product-name'>{item.title}</p>
			</div>

			<ul className="basket__info-list">
				<li className="basket__info-item">{item.size}</li>
				<li className="basket__info-item" style={{ color: item.color === 'white' ? 'black' : item.color }}>{item.color}</li>
				<li className="basket__info-item">
					<PriceSale item={item}/>
					</li>
				<li className="basket__info-item">
					<input className='product__content-input' min='1' value={count} onChange={(e) => {
						setCount(e.target.value >= product.inStock ? product.inStock : e.target.value);
						updateCart(item.id, item.color, item.size, e.target.value)
					}} type="number" />
				</li>
				<li className="basket__info-item">{i18n.language === 'ua' ? `${sumAllOneProduct *  38 } Грн ` : `$${sumAllOneProduct}`}</li>
			</ul>
		</div>
	);
};

export default BasketCard;