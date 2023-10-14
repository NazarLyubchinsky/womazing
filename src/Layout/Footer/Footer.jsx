import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import Logo from '../../components/Logo/Logo';
import ShopList from '../../pages/Shop/ShopList/ShopList';




const Footer = () => {
	const { t } = useTranslation();



	return (
		<footer className='footer'>
			<div className="container">
				<nav className="footer__nav">
					<Logo />
					<ul className='header__list'>
						<li className='header__item'><NavLink className='header__link'
							to="/shop">{t("header.link2")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link'
							to="/brands">{t("header.link3")}</NavLink></li>
						<li className='header__item'><NavLink className='header__link'
							to="/contact">{t("header.link4")}</NavLink></li>
					</ul>
					<div className='footer__contact'>
						<Link className='footer__contact-tel' href='tel: +380 963 211 212'>+380 963 211 212</Link>
						<Link className='footer__contact-tel' href='#'>hello@gmail.com</Link>
					</div>
				</nav>
				<div className='footer__content'>
					<div className='footer__content-right'>
						<p className='footer__content-defense' dangerouslySetInnerHTML={{ __html: t("footer.defense") }} />
						<ul className='footer__content-clothes'>
							<NavLink className='footer__navLink' to='shop'>
								<ShopList className={'footer__content-item'} classNameActive={'footer__content-item_active'} />
							</NavLink>
						</ul>
					</div>
					<div className='footer__content-left'>
						<ul className='footer__content-icons'>
							<Link to='https://www.instagram.com/' className='footer__content-icon'><BsInstagram /></Link>
							<Link to="https://uk-ua.facebook.com/login/" className='footer__content-icon'><BsFacebook /></Link>
							<Link to='https://twitter.com/' className='footer__content-icon'><BsTwitter /></Link>
						</ul>
						<Link to='https://www.visa.com.ua/uk_UA' className='footer__content-pay' href="#"><FaCcVisa /></Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;