import React, { useContext, useRef } from 'react';
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CustomContext } from '../../utils/Context';

const Register = () => {


	const { registerUser,registerError } = useContext(CustomContext);

	const {
		register,
		handleSubmit,
		formState: {
			errors
		},
		watch,
	} = useForm({
		mode: 'onBlur'
	}
	);
	const password = useRef({});
	password.current = watch("password", "");




	return (
		<section className='register'>
			<form className='register__form' onSubmit={handleSubmit(registerUser)}>
				<h2 className='register__title'>Регистрация</h2>
				<p className='register__text'>Регистрация занимает меньше минуты, но дает вам полный контроль над заказом вещей</p>
				<label className='register__label' >Email</label>
				<input  {...register('email', {
					required: 'Это поле обязательное *',
				})} className='register__input' type="email" placeholder='Введите email' />
				<span className='register__link'>{errors?.email?.message}</span>
				<label className='register__label' >Login</label>
				<input  {...register('login', {
					required: 'Это поле обязательное *'
				})} className='register__input' type="text" placeholder='Введите логин' />
				<span className='register__link'>{errors?.login?.message}</span>
				<label className='register__label' >Phone</label>
				<InputMask mask={`+\\9\\96(999)99-99-99`} type='tel' id='tel' {...register('phone', {
					required: 'Это поле обязательное *'
				})} className="register__input" placeholder='Ввеите номер телефона' />
				<span className='register__link'>{errors?.phone?.message}</span>
				<label className='register__label' >Password</label>
				<input  {...register('password', {
					required: "Необхідно вказати пароль",
					minLength: {
						value: 5,
						message: "Password must have at least 5 characters"
					}
				})} className="register__input" type='password' placeholder='Введите пароль' />
				<span className='register__link'>{errors?.password?.message}</span>
				<label className='register__label' >Confirm Password</label>
				<input className="register__input" type='password' placeholder='Введите пароль повторно' {...register('confirmPwd', {
					validate: value =>
						value === password.current || "The password do not match"
				})} />
				{errors?.confirmPwd && <p className='register__link'>{errors?.confirmPwd?.message}</p>}
				{registerError && <p className='register__link'>{registerError}</p>}

				<button className='register__btn'>Зарегестрироваться</button>
				<p className='register__quest'>уже есть аккаунт? <Link className='register__link' to='/login'>Войти</Link> </p>
				<Link to='/' className='home'>Вернуться на главную страницу</Link>

			</form>
		</section>
	);
};

export default Register;