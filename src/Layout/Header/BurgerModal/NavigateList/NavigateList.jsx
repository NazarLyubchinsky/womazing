import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import shoppingBags from '../../../../assets/header/shoppingBags.svg'
import { CustomContext } from '../../../../utils/Context'
import { FaUser } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'


const NavigateList = ({ styleProp, closeModal }) => {
	const { t } = useTranslation();
	const { user, logOutUser } = useContext(CustomContext)

	return (
		<ul className={`list ${[styleProp]}`}>
			<li className='item'>
				<NavLink className='link'
					to='shop'
					onClick={closeModal} style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white'
					})}>{t("header.link2")}</NavLink>
			</li>
			<li className='item'>
				<NavLink className='link' onClick={closeModal} to='brands' style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>{t("header.link3")}</NavLink>
			</li>
			<li className='item'>
				<NavLink className='link' onClick={closeModal} to='contact' style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>{t("header.link4")}</NavLink>
			</li>
			{
				user.email === 'admin@gmail.com' ?
					<li className='item'>
						<NavLink className='link' onClick={closeModal} to='clothes' style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white'
						})}>Admin Panel</NavLink>
					</li> : ''
			}
			<li className='item'>
				<NavLink className='link' onClick={closeModal} to='cart' style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}><img src={shoppingBags} alt="shoppingBags" /> {t('separate.cart')}</NavLink>
			</li>

			{
				user.login.length ?
					<NavLink onClick={closeModal} style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white'
					})} className='link' to='profile'>	<FaUser /> {t('separate.profile')}</NavLink>
					: null
			}
			<li className='item'>
				<div className='user'>
					{
						user.login.length
							? <>

								<NavLink style={({ isActive }) => ({
									color: isActive ? 'greenyellow' : 'white'
								})} className='link header__user-link' to='/' onClick={() => {
									logOutUser()
									closeModal()
								}} >{t("header.exit")}</NavLink>
							</>
							: <NavLink style={({ isActive }) => ({
								color: isActive ? 'greenyellow' : 'white'
							})} className='link header__user-link' to='login'>{t("header.signIn")}</NavLink>
					}
				</div>
			</li>

		</ul >
	)
}

export default NavigateList