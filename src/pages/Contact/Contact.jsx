import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SubTitle from '../../components/SubTitle/SubTitle';
import Title from '../../components/Title/Title';
import ContactForm from './ContactForm/ContactForm';
import Map from "./Map/Map";

const Contact = () => {
	const { t } = useTranslation();
	return (
		<div className='contanct'>
			<div className="container">
				<Title title={t("contacts.crumbs.title")} />
				<SubTitle page={t("contacts.crumbs.link2")} />
				<Map />

				<div className="contacts__content">
					<div className="contacts__info">
						<h4 className="contacts__info-title" dangerouslySetInnerHTML={{ __html: t("contacts.info.tel") }} />
						<Link href="#" className="contacts__info-link">+(380) 96-44-12-735</Link>
					</div>
					<div className="contacts__info">
						<h4 className="contacts__info-title" dangerouslySetInnerHTML={{ __html: t("contacts.info.eMail") }} />
						<Link href="#" className="contacts__info-link">info@gmail.com</Link>
					</div>
					<div className="contacts__info">
						<h4 className="contacts__info-title" dangerouslySetInnerHTML={{ __html: t("contacts.info.address") }} />
						<p className="contacts__info-link" dangerouslySetInnerHTML={{ __html: t("contacts.info.street") }} />
					</div>
				</div>
				<div className="contacts__form">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;