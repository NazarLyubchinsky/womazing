import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation()
	return (
		<div>
			<h2 className='new__title' dangerouslySetInnerHTML={{ __html: t("home.new.title") }} />
		</div>
	)
}

export default Home