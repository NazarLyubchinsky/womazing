import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const BackToHome = () => {
	const { t } = useTranslation();

	return (
		<div className='back'>
			<p className='backToHome'>
				<BsArrowLeft />
				<Link to='/' >{t("login.mainPage")}</Link>
			</p>
		</div>
	)
}

export default BackToHome