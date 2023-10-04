import React from 'react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../../utils/Context'

const ShopSorts = () => {
	const { t } = useTranslation();


	const { sort, setSort } = useContext(CustomContext)
	return (

		<div className='sorts'>
			<button type='btn' className={`sorts__sort ${sort === 'big' ? 'active' : ''}`}
				onClick={() => setSort('big' !== sort ? 'big' : '')}>{t("shop.big")}</button>
			<button type='btn' className={`sorts__sort ${sort === 'less' ? 'active' : ''}`}
				onClick={() => setSort('less' !== sort ? 'less' : '')}>{t("shop.less")}</button>
			<button type='btn' className={`sorts__sort ${sort === 'discount' ? 'active' : ''}`}
				onClick={() => setSort('discount' !== sort ? 'discount' : '')}>{t("shop.discount")}</button>
		</div>
	)
}

export default ShopSorts