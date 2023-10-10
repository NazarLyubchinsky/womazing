import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BasketCard from './BasketCard';
import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';
import axios from 'axios';

const Basket = () => {
	const { cart, setCart, ticket, setTicket } = useContext(CustomContext);

	const { t, i18n } = useTranslation();

	const useTicket = (e) => {
		e.preventDefault();
		axios(`http://localhost:8080/tickets?title=${e.target[0].value}`)
			.then(({ data }) => {
				if (data.length) {
					setTicket(data)
				} else {
					setTicket('Такого купона не существует!!!')
				}
			})
	};

	const calculateTotalPrice = cart.reduce((acc, rec) => acc + rec.count * rec.price, 0);
	return (
		<section className='basket'>
			<div className="container">
				<Title title={t("basket.title")} />
				<SubTitle page={t("basket.title")} />
				<div className="basket__info">
					<h3 className="basket__info-title">{t("basket.product")}</h3>
					<ul className="basket__info-list">
						<li className="basket__info-item">{t("basket.size")}</li>
						<li className="basket__info-item">{t("basket.color")}</li>
						<li className="basket__info-item">{t("basket.price")}</li>
						<li className="basket__info-item">{t("basket.quantity")}</li>
						<li className="basket__info-item">{t("basket.total")}</li>
					</ul>
				</div>
				{
					cart.length ? cart.map((item, idx) => (
						<React.Fragment key={idx}>
							<BasketCard cart={cart} item={item}  />
						</React.Fragment>
					))
						: <p className='basket__info-message'>{t("basket.basketText")}</p>
				}
				{
					cart.length ?
						<>
							<div className='basket__ticket'>
								<form className='basket__ticket-left' onSubmit={useTicket}>
									<input className='basket__ticket-input' placeholder={t("basket.ticket")} type="text" />
									<button type='submit' className="basket__ticket-btn">{t("basket.useTicket")}</button>
									{
										Array.isArray(ticket) && ticket.length ? <p className='basket__ticket-message'>
											По данному промокоду вы получили скидку в размере {ticket[0].discount} %
										</p> : ticket.length ? <p className='basket__ticket-message'>{ticket}</p> : ''
									}
								</form>
								<button className="basket__ticket-btn" onClick={() => setCart([])}>{t("basket.updateCart")}</button>
							</div>

							<div className='basket__pay'>
								<div className='basket__pay-header'>
									<p className='basket__pay-info'>{t("basket.subtotal")}:</p>
									<p className='basket__pay-info'>{i18n.language === 'ua' ? `${calculateTotalPrice * 38} Грн` : `$ ${calculateTotalPrice}`}</p></div>
								<div className='basket__pay-btns'>
									<button className='basket__pay-btn1'>{t("basket.sum")}: <span>{Array.isArray(ticket) && ticket.length
										? i18n.language === 'ua' ? `${(calculateTotalPrice - calculateTotalPrice / 100 * ticket[0].discount) * 38} Грн` : `${(calculateTotalPrice - calculateTotalPrice / 100 * ticket[0].discount)} $`
										: i18n.language === 'ua' ? `${calculateTotalPrice * 38} Грн` : `$ ${calculateTotalPrice}`
									}  </span></button>
									<Link to='/checkout'>
										<button className='basket__pay-btn2'>{t("basket.checkout")}</button>
									</Link>
								</div>
							</div>
						</> : ''
				}
			</div>

		</section>
	);
};

export default Basket;