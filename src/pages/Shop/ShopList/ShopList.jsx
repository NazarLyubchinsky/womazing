import React, { useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../../utils/Context';

const ShopList = ({ className, classNameActive }) => {
	const { i18n } = useTranslation();

	const { status, setStatus, setPage } = useContext(CustomContext)

	const handleItemClick = useCallback((item) => {
		if (status !== item.name) {
			setPage(1);
			setStatus(item.name);
		}
	}, [status, setStatus, setPage]);

	const CategoryItems = [
		{ id: 1, name: 'all', name_ua: 'Всі' },
		{ id: 2, name: 'tshort', name_ua: 'Футболки' },
		{ id: 3, name: 'sweatshirt', name_ua: 'Світшоти' },
		{ id: 4, name: 'suits', name_ua: 'Костюми' },
		{ id: 5, name: 'hoody', name_ua: 'Толстовки' },
	];
	return (
		<>
			{
				CategoryItems.map((item) => (
					<li
						key={item.id}
						className={`${className}  ${status === item.name ? classNameActive : ''}`}
						onClick={() => handleItemClick(item)}
					>
						{
							i18n.language === 'ua' ? item.name_ua : item.name
						}

					</li>
				))
			}
		</>

	)
}

export default ShopList