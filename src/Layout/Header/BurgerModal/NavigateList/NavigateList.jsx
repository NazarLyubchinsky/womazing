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
					})}>Shop</NavLink>
			</li>
			<li className='item'>
				<NavLink className='link' onClick={closeModal} to='brands' style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>Brands</NavLink>
			</li>
			<li className='item'>
				<NavLink className='link' onClick={closeModal} to='contact' style={({ isActive }) => ({
					color: isActive ? 'greenyellow' : 'white'
				})}>Contact</NavLink>
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
				})}><img src={shoppingBags} alt="shoppingBags" /> Cart </NavLink>
			</li>


			<NavLink onClick={closeModal} style={({ isActive }) => ({
				color: isActive ? 'greenyellow' : 'white'
			})} className='link' to='profile'>	<FaUser /> Profile</NavLink>
			
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

		</ul>
	)
}

export default NavigateList