import React, { useContext, useRef } from 'react';
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CustomContext } from '../../utils/Context';

import { useTranslation } from 'react-i18next';
import BackToHome from '../../components/BackToHome/BackToHome';
import ChangeLanguages from '../../components/ChangeLanguages/ChangeLanguages';


const Register = () => {


	const { registerUser, registerError } = useContext(CustomContext);
	const { t } = useTranslation();


	const { register, handleSubmit, formState: { errors }, watch, } = useForm({ mode: 'onBlur' });
	const password = useRef({});
	password.current = watch("password", "");


	const fieldRequired = t("register.field");
	return (
		<section className='register'>
			<form className='register__form' onSubmit={handleSubmit(registerUser)}>
				<BackToHome />
				<ChangeLanguages />
				<h2 className='register__title'>{t("register.title")}</h2>
				<p className='register__text'>{t("register.subtitle")}</p>
				<br />

				<label className='register__label' >{t("register.email")}</label>
				<input  {...register('email', {
					required: fieldRequired,
				})} className='register__input' type="email" placeholder='Enter your email.' />
				<span className='register__link'>{errors?.email?.message}</span>

				<label className='register__label' >{t("register.login")}</label>
				<input  {...register('login', {
					required: fieldRequired
				})} className='register__input' type="text" placeholder='Enter your username.' />
				<span className='register__link'>{errors?.login?.message}</span>

				<label className='register__label' >{t("register.phone")}</label>
				<InputMask mask={`+\\(3\\80)99999-99-99`} type='tel' id='tel' {...register('phone', {
					required: fieldRequired
				})} className="register__input" placeholder='Enter your phone number.' />
				<span className='register__link'>{errors?.phone?.message}</span>

				<label className='register__label' >{t("register.password")}</label>
				<input  {...register('password', {
					required: t("register.passwordNeed"),
					minLength: {
						value: 5,
						message: t("register.passwordLength")
					}
				})} className="register__input" type='password' placeholder='Enter your password.' />
				<span className='register__link'>{errors?.password?.message}</span>

				<label className='register__label' >{t("register.confirmPassword")}</label>
				<input className="register__input" type='password' placeholder='Re-enter your password.' {...register('confirmPwd', {
					validate: value =>
						value === password.current || t("register.passwordDontMatch")
				})} />
				{errors?.confirmPwd && <p className='register__link'>{errors?.confirmPwd?.message}</p>}
				{registerError && <p className='register__link'>{registerError}</p>}

				<button className='register__btn'>{t("register.register")}</button>
				<p className='register__quest'>{t("register.haveAccount")} <Link className='register__link' to='/login'>{t("register.login")}</Link> </p>


			</form>
		</section>
	);
};

export default Register;