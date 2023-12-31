import React from 'react';
import Slider from "./Slider";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import Title from '../../../components/Title/Title';

const Team = () => {
	const { t } = useTranslation();
	return (
		<section className='team'>
			<div className="container">
				<Title title={t("home.team.title")} />
				<div className="team__content">
					<Slider />
					<div className="team__content-right">
						<p className="team__content-text">{t("home.team.text")}</p>
						<p className="team__content-info">{t("home.team.info")}</p>
						<Link to='brands' className="team__content-more">{t("home.team.more")}</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;