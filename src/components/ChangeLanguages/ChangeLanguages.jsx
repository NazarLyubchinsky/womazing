import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguages = () => {
	const { i18n } = useTranslation();
	const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('i18nextLng') || 'ua');

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
		setActiveLanguage(lang);
	};

	return (
		<div className='language'>
			<button
				className={`language__btn ${activeLanguage === 'ua' ? 'language__btn-active' : ''}`}
				onClick={() => changeLanguage('ua')}
				type='button'
			>
				Ua
			</button>
			<button
				className={`language__btn ${activeLanguage === 'en' ? 'language__btn-active' : ''}`}
				onClick={() => changeLanguage('en')}
				type='button'
			>
				En
			</button>
		</div>
	);
};

export default ChangeLanguages;
