import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const SubTitle = ({ page }) => {
	const { t } = useTranslation();

	return (
		<div className='navigations'>
			<Link className='navigations__main' to='/'>{t("separate.main")}</Link>
			-
			<p>{page}</p>
		</div>
	)
}

export default SubTitle