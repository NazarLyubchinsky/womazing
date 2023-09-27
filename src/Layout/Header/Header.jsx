import React, { useContext, useState } from 'react'

// img
import logo from '../../assets/header/logo.svg'
import CallOrder from '../../assets/header/CallOrder.svg'
import shoppingBags from '../../assets/header/shoppingBags.svg'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../utils/Context'

const Header = () => {
	const { t, i18n } = useTranslation();
	const [activeLanguage, setActiveLanguage] = useState('ua');

	const { user } = useContext(CustomContext)

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang)
		setActiveLanguage(lang);
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
						<button className={`header__btn ${activeLanguage === 'ua' ? 'header__btn-active' : ''}`} onClick={() => changeLanguage('ua')} type='button'>Ua</button>
						<button className={`header__btn ${activeLanguage === 'en' ? 'header__btn-active' : ''}`} onClick={() => changeLanguage('en')} type='button'>En</button>
					</div>
					<div className='header__user'>

						{
							user.login.length
								? <NavLink className='header__user' to='profile'>
									{/* <FaUser /> */}
								</NavLink>
								: ''
						}

						{
							user.login.length
								? <Link className='header__out' to='/'
								// onClick={() => logOutUser()}
								>Выйти</Link>
								: <Link className='header__login' to='login'>Войти</Link>
						}

					</div>


				</nav>
			</div >
		</div >
	)
}

export default Header