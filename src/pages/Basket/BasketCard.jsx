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
		<>
			<div className="basket__product">
				<div className='basket__product-left'>
					<Link className='shop__card-link' to={`/product/${item.id}`}>
						<img className='basket__product-img' src={item.image[item.color]} alt={item.title} />
					</Link>
					<p className='basket__product-name'>{item.title}</p>
				</div>

				<ul className="basket__info-list">
					<li className="basket__info-item">{item.size}</li>
					<li className="basket__info-item" style={{ color: item.color === 'white' ? 'black' : item.color }}>{item.color}</li>
					<li className="basket__info-item">
						<PriceSale item={item} />
					</li>
					<li className="basket__info-item">
						<input
							className='product__content-input'
							min='1'
							max={item.inStock}
							value={count}

							onChange={(e) => {
								const newCount = e.target.value >= product.inStock ? product.inStock : e.target.value;
								setCount(newCount);
								updateCart(item.id, item.color, item.size, newCount); // Оновлення кошика на сервері
							}}
							type="number"
						/>
					</li>
					<li className="basket__info-item">{i18n.language === 'ua' ? `${sumAllOneProduct * 38} Грн ` : `$${sumAllOneProduct}`}</li>
				</ul>
				<p className='basket__product-mark' onClick={() => deleteCart(item.id, item.color, item.size)}><ImCross /></p>
			</div>

			{/* media 992px */}


			<div className="basket__product-adaptive">
				<div className='basket__product-row'>
					<Link className='basket__product-link' to={`/product/${item.id}`}>
						<img className='profile__orders-image basket__product-image' src={item.image[item.color]} alt="" />
					</Link>
					<div className='profile__orders-block'>
						<p className='profile__orders-info'>Название : <br /> <span className='profile__orders-span'>{item.title}</span> </p>
						<p className='profile__orders-info'>Категория : <br /> <span className='profile__orders-span'>{item.category}</span> </p>
						<p className='profile__orders-info'>цвет : <br /> <span className='profile__orders-span'>{item.color}</span></p>
						<p className='profile__orders-info'>Размер : <br /> <span className='profile__orders-span'>{item.size}</span> </p>
						<p className='profile__orders-info'>Кол-во :  <br />
							<input
								disabled={!item.inStock}
								className='profile__orders-span basket__info-span'
								min='1'
								max={item.inStock}
								value={count}
								onChange={(e) => {
									const newCount = e.target.value >= product.inStock ? product.inStock : e.target.value;
									setCount(newCount);
									updateCart(item.id, item.color, item.size, newCount); // Оновлення кошика на сервері
								}}
								type="number"
							/></p>
						<p className='profile__orders-info'>Цена : <br /> <span className='profile__orders-span'>{item.price}$</span> </p>
					</div>
					<p className='basket__product-mark' onClick={() => deleteCart(item.id, item.color, item.size)}><ImCross /></p>
				</div>
			</div>


		</>
	);
};

export default BasketCard;