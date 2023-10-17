import React from 'react';
import { useTranslation } from "react-i18next";
import './contactForm.scss'
import InputMask from "react-input-mask";

const ContactForm = () => {
	const { t } = useTranslation();

	return (
		<div className='form'>
			<div className="container">
				<h3 className="form__title" dangerouslySetInnerHTML={{ __html: t("contacts.form.title") }} />
				<form className="form" action="https://formsubmit.co/9cab0f0d4b4b3eac39a71761002950ab" method="POST">
					<div className='form__block'>
						<input type="hidden" name="_captcha" value="false" />
						<input type="hidden" name="_next" value="http://localhost:3000/" />
						<input className="form__input" type="text" placeholder={t("contacts.form.name")} />
						<input className="form__input" name="email" type="email" placeholder={t("contacts.form.eMail")} />
						<InputMask mask={`+\\9\\96(999)99-99-99`} type='tel' id='tel' className="form__input" placeholder={t("profile.phone")} />
					</div>
					<div className='form__textarea'>
						<textarea className="form__message" placeholder={t("contacts.form.message")} />
					</div>
					<button className="form__btn" type="submit" dangerouslySetInnerHTML={{ __html: t("contacts.form.btn") }} />
				</form>
			</div>
		</div>
	);
};

export default ContactForm;