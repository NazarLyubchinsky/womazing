import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import axios from 'axios'


const CheckoutForm = () => {
	const { cart, ticket, user, setCart, setTicket, setUser, API_BASE_URL, getAllClothes } = useContext(CustomContext)

	const { register, handleSubmit, reset } = useForm()
	const { t } = useTranslation()


	const totalCartPrice = cart.reduce((acc, rec) => acc + rec.count * rec.price, 0);

	const discountedTotalPrice = Array.isArray(ticket) && ticket.length
		? totalCartPrice - totalCartPrice / 100 * ticket[0].discount
		: totalCartPrice;

	const navigate = useNavigate()

	const addOrder = async (data) => {
		await axios.post(`${API_BASE_URL}/orders`, {
			...data,
			clothes: cart,
			price: Array.isArray(ticket) && ticket.length
				? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
				: cart.reduce((acc, rec) => acc + rec.count * rec.price, 0),
			userEmail: user.email,
			date: new Date()
		}).then(() => {
			console.log('Успешно добавлен')
		});
		await axios.patch(`${API_BASE_URL}/users/${user.id}`, {
			orders: [
				...user.orders,
				{
					...data,
					clothes: cart,
					price: Array.isArray(ticket) && ticket.length
						? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
						: cart.reduce((acc, rec) => acc + rec.count * rec.price, 0),
					date: new Date()
				}
			]
		}).then(() => console.log('Успешно добавлен'));

		await axios(`${API_BASE_URL}/users/${user.id}`).then((res) => setUser(res.data));

		await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ?
			axios.patch(`${API_BASE_URL}/tickets/${ticket[0].id}`, { count: ticket[0].count - 1 })
				.then(() => console.log('успешно использован'))
			: Array.isArray(ticket) && ticket.length && ticket[0].count === 1 ? axios.delete(`${API_BASE_URL}/tickets/${ticket[0].id}`).then(() => console.log('Успешно удален'))
				: console.log('Error');

		const updateInStockPromises = cart.map((product) => {
			const updatedInStock = product.inStock - product.count;
			return axios.patch(`${API_BASE_URL}/clothes/${product.id}`, { inStock: updatedInStock }).then(() => {
				getAllClothes();
			});
		});
		await Promise.all(updateInStockPromises);

		await reset();
		await setCart([]);
		await setTicket([]);
		await navigate('/order')

	};

	// console.log(cart)
	// const updateInStockPromises = cart.map((product) => (

	// 	console.log(product)
	// ))
	// const updatedInStock = product.inStock - product.count;
	// console.log(updatedInStock)
	// return axios.patch(`${API_BASE_URL}/clothes/${product.id}`, { inStock: updatedInStock });
	// });
	//  Promise.all(updateInStockPromises);

	// console.log(updateInStockPromises)

	return (
		<form className='checkoutForm' onSubmit={handleSubmit(addOrder)}>
			<div className="checkout__buyer">
				<div className="checkout__buyer-form">
					<h3 className="checkout__title"
						dangerouslySetInnerHTML={{ __html: t("checkout.buyerTitle") }} />
					<input {...register("name")} className="checkout__buyer-input"
						placeholder={t("checkout.buyerName")} type="text" />
					<input {...register('email')} className="checkout__buyer-input"
						placeholder={t("checkout.buyerMail")} type="email" />
					<input {...register('phone')} className="checkout__buyer-input"
						placeholder={t("checkout.buyerPhone")} type="tel" />
				</div>
				<div className="checkout__buyer-left">
					<h3 className="checkout__title"
						dangerouslySetInnerHTML={{ __html: t("checkout.orderTitle") }} />
					<ul className="checkout__buyer-list">
						<li className="checkout__buyer-item">
							<p className="checkout__buyer-info">
								{t("checkout.productName")}
							</p>
							<p className="checkout__buyer-info">
								{t("checkout.total")}
							</p>
						</li>
						{
							cart.map((item, idx) => (
								<div key={idx} className="checkout__buyer-cart">
									<img className='checkout__buyer-cart-img' src={item.image[item.color]}
										alt={item.title} />
									<div className='checkout__buyer-cart-info'>
										<div className='checkout__buyer-cart-top'>
											<p className="checkout__buyer-product checkout__buyer-product-title">
												<span>{t("checkout.name")}:</span>
												{item.title}
											</p>
											<p className="checkout__buyer-product checkout__buyer-product-text">
												<span>{t("checkout.count")} :</span>
												{item.count}</p>
										</div>
										<div className='checkout__buyer-cart-top'>
											<p className="checkout__buyer-product checkout__buyer-product-text">
												<span>{t("checkout.color")} :</span>
												{item.color}
											</p>
											<p className="checkout__buyer-product checkout__buyer-product-text">
												<span>{t("checkout.size")} :</span>
												{item.size}
											</p>
											<p className="checkout__buyer-product checkout__buyer-product-text">
												<span>{t("checkout.price")}:</span>
												$ {item.count * item.price}
											</p>
										</div>
									</div>

								</div>
							))
						}

						<li className="checkout__buyer-item checkout__buyer-product-text">
							<p className="checkout__buyer-product">
								{t("checkout.subtotal")}
							</p>
							<p className="checkout__buyer-price">$ {totalCartPrice}</p>
						</li>
						<li className="checkout__buyer-item checkout__buyer-product-text checkout__buyer-item_act">
							<p className="checkout__buyer-product">
								{t("checkout.inTotal")}
							</p>
							<p className="checkout__buyer-product ">$ {discountedTotalPrice}</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="checkout__address">
				<div className="checkout__address-form">
					<h3 className="checkout__title"
						dangerouslySetInnerHTML={{ __html: t("checkout.addressTitle") }} />
					<input {...register('county')} className="checkout__address-input" type="text"
						placeholder={t("checkout.country")} />
					<input {...register('city')} className="checkout__address-input" type="text"
						placeholder={t("checkout.city")} />
					<input {...register('street')} className="checkout__address-input" type="text"
						placeholder={t("checkout.street")} />
					<input {...register('house')} className="checkout__address-input" type="text"
						placeholder={t("checkout.home")} />
					<input {...register('flat')} className="checkout__address-input" type="text"
						placeholder={t("checkout.flat")} />
					<h3 className="checkout__title checkout__title_com"
						dangerouslySetInnerHTML={{ __html: t("checkout.comments") }} />
					<textarea {...register('message')} className="checkout__address-comment"
						placeholder={t("checkout.country")} />
				</div>
				<div className="checkout__address-left">
					<h3 className="checkout__title" dangerouslySetInnerHTML={{ __html: t("checkout.payment") }} />
					<div className="checkout__address-check">
						<input className="checkout__address-checked" type="checkbox" />
						{t("checkout.cash")}
					</div>
					<button type="submit" className="checkout__address-btn">{t("checkout.place")}</button>
				</div>
			</div>
		</form>
	)
}

export default CheckoutForm