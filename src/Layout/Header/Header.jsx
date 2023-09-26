import React from 'react'

// img
import logo from '../../assets/header/logo.svg'
import CallOrder from '../../assets/header/CallOrder.svg'
import shoppingBags from '../../assets/header/shoppingBags.svg'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang)
	};
	return (
		<div className='header'>
			<div className="container">
				<nav className="header__nav">
					<Link to='/' className='header__logo'>
						<img src={logo} alt="Logo" />
						Womazing
					</Link>
					<ul className='header__list'>
						<li className='header__item'><NavLink className='header__link' to='/'>{t("header.link1")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link' to='/shop'>{t("header.link2")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link' to='/brands'>{t("header.link3")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link' to='/contact'>{t("header.link4")}</NavLink></li>
					</ul>
					<div className='header__info'>
						<Link to="tel: +380 963 211 212" className='header__info-call'>
							<img src={CallOrder} alt="call" />
							<span className='header__tel' >+380 963 211 212</span>
						</Link>

						<Link to='/cart' className='header__info-cart'>
							<img src={shoppingBags} alt="shoppingBags" />
						</Link>

					</div>
					<div className='header__btns'>
						<button className='header__btn ' onClick={() => changeLanguage('ua')} type='button'>Ua</button>
						<button className='header__btn' onClick={() => changeLanguage('en')} type='button'>En</button>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header