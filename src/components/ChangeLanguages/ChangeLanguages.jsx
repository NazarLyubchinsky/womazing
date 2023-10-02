import React from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguages = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div className='language'>
			<button
				className={`language__btn ${i18n.language === 'ua' ? 'language__btn-active' : ''}`}
				onClick={() => changeLanguage('ua')}
				type='button'
			>
				Ua
			</button>
			<button
				className={`language__btn ${i18n.language === 'en' ? 'language__btn-active' : ''}`}
				onClick={() => changeLanguage('en')}
				type='button'
			>
				En
			</button>
		</div>
	);
};

export default ChangeLanguages;
