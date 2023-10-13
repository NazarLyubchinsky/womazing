import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';



const ProfileOrdersItem = ({ item,idx }) => {
	const { t } = useTranslation();
	const [isActive, setIsActive] = useState(false);

console.log(item)
	return (
		<>
			<li className='profile__orders-item' onClick={() => setIsActive(!isActive)}>
				<p className='profile__orders-info'><span className='profile__orders-about'>№</span> {idx}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.name")}</span> {item.name}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.email")}</span> {item.email}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.tel")}</span> {item.phone}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.country")}</span> {item.county}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.city")}</span> {item.city}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.street")}</span> {item.street}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.house")}</span> {item.house}</p>
				<p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.flat")}</span> {item.flat}</p>
				<p className='profile__orders-arrow' onClick={() => setIsActive(!isActive)}>
					{
						isActive ? <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z" fill="#FF7010" />
						</svg>
							:
							<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.527021 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z" fill="#FF7010" />
							</svg>
					}
				</p>
			</li>
			{
				isActive &&
				item.clothes.map((el, idx) =>
				(
					<li className='profile__orders-item ' key={idx}>
						<img className='profile__orders-image' src={el.image[el.color]} alt="" />
						<p className='profile__orders-info'>Название : <br /> <span className='profile__orders-span'>{el.title}</span> </p>
						<p className='profile__orders-info'>Категория : <br /> <span className='profile__orders-span'>{el.category}</span> </p>
						<p className='profile__orders-info'>цвет : <br /> <span className='profile__orders-span'>{el.color}</span></p>
						<p className='profile__orders-info'>Размер : <br /> <span className='profile__orders-span'>{el.size}</span> </p>
						<p className='profile__orders-info'>Кол-во :  <br /> <span className='profile__orders-span'>{el.count}</span></p>
						<p className='profile__orders-info'>Цена : <br /> <span className='profile__orders-span'>{el.price}$</span> </p>
					</li>
				))
			}</>
	)
}

export default ProfileOrdersItem