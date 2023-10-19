import React, { useContext } from 'react'
import { FaUser } from 'react-icons/fa'
// img
import CallOrder from '../../assets/header/CallOrder.svg'
import shoppingBags from '../../assets/header/shoppingBags.svg'
import { Link, NavLink } from 'react-router-dom'
import { CustomContext } from '../../utils/Context'

import { useTranslation } from 'react-i18next'
import ChangeLanguage from '../../components/ChangeLanguages/ChangeLanguages'
import Logo from '../../components/Logo/Logo'
import BurgerModal from './BurgerModal/BurgerModal'

const Header = () => {
	const { t } = useTranslation();

	const { user, logOutUser } = useContext(CustomContext)


	return (
		<div className='header'>
			<div className="container">
				<nav className="header__nav">
					<Logo />
					<ul className='header__list'>
						<li className='header__item'><NavLink className='header__link' to='shop'>{t("header.link2")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link' to='brands'>{t("header.link3")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link' to='contact'>{t("header.link4")}</NavLink></li>

						{
							user.email === 'admin@gmail.com' ? <li className='header__item'><NavLink className='header__link' to="/clothes">Admin Panel</NavLink></li> : ''
						}
					</ul>
					<div className='header__info'>
						<Link to="tel: +380 963 211 212" className='header__info-call'>
							<img src={CallOrder} alt="call" />
							<span className='header__tel' >+380 963 211 212</span>
						</Link>

						{user.login ? <Link to='/cart' className='header__info-cart'>
							<img src={shoppingBags} alt="shoppingBags" />
						</Link> : ''}

					</div>
					<ChangeLanguage />
					<div className='header__user'>
						{
							user.login.length
								? <>
									<Link to='profile'>	<FaUser /></Link>
									<Link className='header__user-link' to='/' onClick={() => logOutUser()} >{t("header.exit")}</Link>
								</>
								: <Link className='header__user-link' to='login'>{t("header.signIn")}</Link>
						}
					</div>
					<BurgerModal />
				</nav>
			</div >
		</div >
	)
}

export default Header