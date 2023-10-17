import React from 'react';
import { useTranslation } from 'react-i18next';
import SubTitle from '../../components/SubTitle/SubTitle';
import Title from '../../components/Title/Title';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';

import ideaImg from "../../assets/Brands/idea.png"
import magicImg from "../../assets/Brands/magic.png";

const Brands = () => {
	const { t } = useTranslation();
	return (
		<section className="about">
			<div className="container">
				<Title title={t("brands.about.title")} />
				<SubTitle page={t("brands.about.link2")} />
				<div className="about__wrapper">
					<div className="about__content about__content-reverse">
						<LazyLoadImage
							alt='image'
							src={ideaImg}
							effect='blur'
							className="about__inner"
						/>
						<div className="about__inner2">
							<h3 className="about__title" dangerouslySetInnerHTML={{ __html: t("brands.idea.title") }} />
							<p className="about__text" dangerouslySetInnerHTML={{ __html: t("brands.idea.text") }} />
						</div>
					</div>

					<div className="about__content ">
						<div className="about__inner">
							<h3 className="about__title" dangerouslySetInnerHTML={{ __html: t("brands.magic.title") }} />
							<p className="about__text" dangerouslySetInnerHTML={{ __html: t("brands.magic.text") }} />
						</div>
						<LazyLoadImage
							alt='image'
							src={magicImg}
							effect='blur'
							className="about__inner2"
						/>
					</div>
					<div className="about__go">
						<Link to='/shop'><button type="button" className="about__btn" dangerouslySetInnerHTML={{ __html: t("brands.magic.btn") }} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;