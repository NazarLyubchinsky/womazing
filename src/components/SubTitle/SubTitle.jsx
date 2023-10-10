import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { CustomContext } from '../../utils/Context';

const SubTitle = ({ page, shop, category, name }) => {
	const { t } = useTranslation();
	const { setPage, setStatus } = useContext(CustomContext)


	return (
		<div className='navigations'>
			<Link className='navigations__main' to='/'>{t("separate.main")}</Link>
			-
			{page ?
				<p className="navigations__page">{page}</p>
				: category ?
					<Link className="navigations__category" to='/shop' onClick={() => {
						setPage(1)
						setStatus(category)
					}}>{category}</Link>
					: <Link className='navigations__shop' to='/shop'>{shop}</Link>
			}
			{
				name ? (
					<>
						-
						<p className='navigations__name'>{name}</p>
					</>
				) : null
			}

		</div >
	)
}

export default SubTitle