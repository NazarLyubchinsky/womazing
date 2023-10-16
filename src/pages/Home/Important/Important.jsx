import React from 'react';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import Card from '../../../components/Card/Card';
import { CustomContext } from '../../../utils/Context';

const Important = () => {
	const { t } = useTranslation();
	const { shop } = useContext(CustomContext)

	return (
		<section className='important'>
			<div className="container">
				<h2 className="important__title">{t("home.important.title")}</h2>
				<div className="important__content">
					{
						shop.slice(4, 6).map((el) => (
							<React.Fragment key={el.id}>
								<Card item={el} />
							</React.Fragment>
						))
					}
				</div>
			</div>

		</section>
	);
};

export default Important;