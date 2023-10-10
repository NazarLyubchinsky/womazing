import React from 'react'
import { useTranslation } from 'react-i18next'
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {

	const { t } = useTranslation()

	return (
		<section className="checkout">
			<div className="container">
				<Title title={t("checkout.title")} />
				<SubTitle page={t("checkout.title")} />
				<CheckoutForm/>
			</div>
		</section>
	)
}

export default Checkout