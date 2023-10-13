import React from 'react';
import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import img from './check.png'
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';

const Order = () => {
	const { t } = useTranslation();
	return (
		<section className='order'>
			<div className="container">
				<Title title={t("order.title")} />
				<SubTitle checkout={t("order.link2")} order={t("order.link3")}/>
				<div className='order__content'>
					<div className='order__content-left'>
						<img className='order__content-img' src={img} alt="img" />
						<div className='order__content-subtitle'>
							<p className='order__content-text'>{t("order.success")}</p>
							<p className='order__content-info'>{t("order.contact")}</p>
						</div>
					</div>
					<div className='order__content-right'>
						<Link className='order__content-home' to='/'>
							<button className='order__content-btn'>{t("order.btn")}</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;