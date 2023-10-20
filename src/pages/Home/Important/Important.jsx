import React from 'react';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import Card from '../../../components/Card/Card';
import Preloader from '../../../components/Preloader/Preloader';
import Title from '../../../components/Title/Title';
import { CustomContext } from '../../../utils/Context';

const Important = () => {
	const { t } = useTranslation();
	const { shop, isLoading } = useContext(CustomContext)

	return (
		<section className='important'>
			<div className="container">
				<Title title={t("home.important.title")} />
				<div className="important__content">
					{
						!isLoading ?
							shop.slice(4, 7).map((el) => (
								<React.Fragment key={el.id}>
									<Card item={el} styleWidth='styleWidth' />
								</React.Fragment>
							)) : <Preloader />
					}
				</div>
			</div>

		</section>
	);
};

export default Important;