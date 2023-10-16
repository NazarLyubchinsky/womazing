import React from 'react';
import { Link } from "react-router-dom"


import { useTranslation } from "react-i18next";
import Card from '../../../components/Card/Card';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/Context';

const Collection = () => {
	const { t } = useTranslation();
	const { shop } = useContext(CustomContext)
	return (
		<section className='collection'>
			<div className="container">
				<h2 className="collection__title">{t("home.collection.title")}</h2>
				<div className="collection__content">
					{
						shop.slice(0, 2).map((el) => (
							<React.Fragment key={el.id}>
								<Card item={el} />
							</React.Fragment>
						))
					}
				</div>
				<Link to='shop'>
					<button type='button' className="collection__btn">
						{t("home.collection.btn")}
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Collection;