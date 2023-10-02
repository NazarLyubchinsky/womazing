import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { CustomContext } from '../../utils/Context';

import ChangeLanguages from '../../components/ChangeLanguages/ChangeLanguages';
import { useTranslation } from 'react-i18next';
import BackToHome from '../../components/BackToHome/BackToHome';




const Login = () => {
	const { t } = useTranslation();

	const { loginUser, loginError } = useContext(CustomContext);

	const {
		register,
		handleSubmit,
		formState: {
			errors
		},
	} = useForm();

	const fieldRequired = t("login.field");

	return (
		<section className='login'>

			<form className='login__form' onSubmit={handleSubmit(loginUser)}>
				<BackToHome />
				<ChangeLanguages />
				<h2 className='login__title'>{t("login.title")}</h2>
				<p className='login__text'>{t("login.subtitle")}</p>
				<br />

				<label className='login__label' >{t("login.email")}</label>
				<input  {...register('email', {
					required: fieldRequired,
				})} className='login__input' type="email" placeholder='Your working email' />
				<span className='register__link'>{errors?.email?.message}</span>

				<label className='login__label' >{t("login.password")}</label>
				<input  {...register('password', {
					required: fieldRequired,
				})} className='login__input' type="password" placeholder='Enter password' />
				<span className='register__link'>{errors?.email?.message}</span>
				{loginError && <p className='register__link'>{loginError}</p>}

				<button className='login__btn' type='submit'>{t("login.login")}</button>
				<p className='login__quest'>{t("login.dontAccount")}<Link className='login__link' to='/register'>{t("login.signup")}</Link> </p>
			</form>
		</section>
	);
};

export default Login;