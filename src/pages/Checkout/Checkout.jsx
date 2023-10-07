import React from 'react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import { CustomContext } from '../../utils/Context'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
	const { cart, ticket, user, setCart, setTicket, setUser, API_BASE_URL } = useContext(CustomContext)

	const { t } = useTranslation()

	const navigate = useNavigate()

	const { register, handleSubmit, reset } = useForm()

	const totalCartPrice = cart.reduce((acc, rec) => acc + rec.count * rec.price, 0);
	const discountedTotalPrice = Array.isArray(ticket) && ticket.length
		? totalCartPrice - totalCartPrice / 100 * ticket[0].discount
		: totalCartPrice;


	const addOrder = async (data) => {
		await axios.post(`${API_BASE_URL}/orders`, {
			...data,
			clothes: cart,
			price: discountedTotalPrice,
			userEmail: user.email,
			date: new Date()
		}).then(() => console.log('успешно'));

		await axios.patch(`${API_BASE_URL}/users/${user.id}`, {
			orders: [
				...user.orders, {
					clothes: cart,
					price: discountedTotalPrice,
					date: new Date()
				}
			]
		}).then(() => console.log('успешно'));

		await axios(`${API_BASE_URL}/users/${user.id}`).then((res) => setUser(res.data));


		await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ?
			axios.patch(`${API_BASE_URL}/tickets/${ticket[0].id}`, { count: ticket[0].count - 1 })
				.then(() => console.log('успешно использован'))
			: Array.isArray(ticket) && ticket.length && ticket[0].count === 1 ? axios.delete(`${API_BASE_URL}/tickets/${ticket[0].id}`).then(() => console.log('Успешно удален'))
				: console.log('Error')

		await reset()
		await setCart([])
		await setTicket([])
		await navigate('/order')

	};

	return (
		<section className="checkout">
			<div className="container">
				<Title title={t("checkout.title")} />
				<SubTitle page={t("checkout.title")} />
				<form onSubmit={handleSubmit(addOrder)}>
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
									cart.map((item) => (
										<div key={item.id} className="checkout__buyer-cart">
											<img className='checkout__buyer-cart-img' src={item.image[item.color]}
												alt={item.title} />
											<div className='checkout__buyer-cart-info'>
												<div className='checkout__buyer-cart-top'>
													<p className="checkout__buyer-product checkout__buyer-product-title">
														<span>Название :</span>
														{item.title}
													</p>
													<p className="checkout__buyer-product checkout__buyer-product-text">
														<span>Количество :</span>
														{item.count}</p>
												</div>
												<div className='checkout__buyer-cart-top'>
													<p className="checkout__buyer-product checkout__buyer-product-text">
														<span>Цвет :</span>
														{item.color}
													</p>
													<p className="checkout__buyer-product checkout__buyer-product-text">
														<span>Размер :</span>
														{item.size}
													</p>
													<p className="checkout__buyer-product checkout__buyer-product-text">
														<span>Цена :</span>
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
							<input {...register('street ')} className="checkout__address-input" type="text"
								placeholder={t("checkout.street")} />
							<input {...register('house')} className="checkout__address-input" type="text"
								placeholder={t("checkout.home")} />
							<input {...register('flat')} className="checkout__address-input" type="text"
								placeholder={t("checkout.flat")} />
							<h3 className="checkout__title checkout__title_com"
								dangerouslySetInnerHTML={{ __html: t("checkout.comments") }} />
							<textarea {...register('message')}  className="checkout__address-comment"
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
			</div>
		</section>
	)
}

export default Checkout