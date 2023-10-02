import React from 'react'
import { useTranslation } from 'react-i18next';

const QuantityGoods = ({ shop, FilterCategory, FilterPage }) => {
	const { t } = useTranslation();

	return (
		<p style={{ marginBottom: '2.5rem' }}>{t("separate.shown")}: {shop.filter(FilterCategory).filter(FilterPage).length} {t("separate.from")} {shop.filter(FilterCategory).length} {t("separate.products")}</p>

	)
}

export default QuantityGoods