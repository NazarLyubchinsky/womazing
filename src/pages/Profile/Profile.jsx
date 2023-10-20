import React, { useRef, useContext, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { CustomContext } from '../../utils/Context'

import { BsPencilFill } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'

import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next'

import Title from '../../components/Title/Title'
import SubTitle from '../../components/SubTitle/SubTitle'
import { useEffect } from 'react'
import Preloader from '../../components/Preloader/Preloader'
import ProfileOrdersItem from './ProfileOrdersItem'



const Profile = () => {
	const { t } = useTranslation();
	const { user, setUser, randomTicket, API_BASE_URL } = useContext(CustomContext)

	const [userChange, setUserChange] = useState(false)
	const [passwordChange, setPasswordChange] = useState(false);
	const [tab, setTab] = useState(2);


	const {
		register,
		formState: {
			errors
		},
		watch,
		handleSubmit
	} = useForm({
		mode: "onBlur"
	});
	const password = useRef({});
	password.current = watch("password", "");

	const changeUser = (data) => {
		axios.patch(`${API_BASE_URL}/users/${user.id}`, data)
			.then(({ data }) => {
				setUser(data);
				localStorage.setItem('user', data);
				setUserChange(false)
			})
	};
	const changePassword = (data) => {
		axios.patch(`${API_BASE_URL}/users/${user.id}`, { password: data.password })
			.then(() => setPasswordChange(false))
	};


	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(`${API_BASE_URL}/users/${user.id}`);
				const userData = response.data;
				setData(userData);
				setLoading(false);
			} catch (error) {
				console.error('Помилка під час завантаження даних користувача:', error);
				setLoading(false);
			}
		};

		if (user.id) {
			fetchData();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.id]);


	return (
		loading ? <Preloader /> :
			<section className="profile">
				<div className="container">
					<div className='profile__header'>
						<div className="profile__crumbs">
							<Title title={t("profile.title")} />
							<SubTitle page={t("profile.profile")} />
						</div>
						<div className='profile__btns'>
							<div className='profile__btns-block'>
								<button onClick={() => {

									setTab(1)
								}
								}
									className={`profile__btn ${tab === 1 && 'active'}`}>{t("profile.btn1")}</button>
								<button onClick={() => setTab(2)}
									className={`profile__btn ${tab === 2 && 'active'}`}>{t("profile.btn2")}</button>
							</div>
						</div>
					</div>
					{
						tab === 1
							?
							// <div className='profile__orders '>

							data.orders.map((item, idx) => (
								<React.Fragment key={idx}>
									<ProfileOrdersItem idx={idx} item={item} />
								</React.Fragment>
							))

							// </div>

							: <div>
								<form onSubmit={handleSubmit(changeUser)} className="profile__content">
									<div className="profile__change">
										<h3 className='profile__content-title'>{t("profile.info")}</h3>
										<span>
											<span className='profile__content-write' onClick={() => setUserChange(!userChange)}>
												{userChange ? <><ImCross /> {t("profile.cancel")} </> : <>
													<BsPencilFill /> {t("profile.change")} </>}
											</span>
										</span>
									</div>
									<div className="profile__info">
										<p className='profile__info-about profile__info-block'>
											<span className='profile__info-upper'>{t("profile.login")}</span>
											{userChange ?
												<input className='profile__info-input' {...register('login')}
													defaultValue={user.login} type="text" /> : user.login}
										</p>
										<p className='profile__info-about profile__info-block'>
											<span className='profile__info-upper'>{t("profile.phone")}*:</span>
											{userChange ? <InputMask className='profile__info-input' {...register('phone')}
												mask={`+\\9\\96(999)99-99-99`}
												defaultValue={user.phone} type="tel" /> : user.phone}
										</p>
										<p className='profile__info-about profile__info-block'>
											<span className='profile__info-upper'>{t("profile.mail")}</span>
											{userChange ?
												<input className='profile__info-input' {...register('email')}
													defaultValue={user.email} type="email" /> : user.email}
										</p>
									</div>


									{userChange ?
										<button className='profile__info-save' type='submit'>{t("profile.save")}</button> : ''}

								</form>
								<form onSubmit={handleSubmit(changePassword)} className='profile__content'>
									<div className="profile__change">
										<h3 className='profile__content-title'>{t("profile.password")}</h3>
										<span>
											<span className='profile__content-write' onClick={() => setPasswordChange(!passwordChange)}>
												{passwordChange ? <><ImCross /> {t("profile.cancel")} </> : <>
													<BsPencilFill /> {t("profile.change")} </>}
											</span>
										</span>
									</div>
									{passwordChange ? <div className='profile__info'>
										<p className='profile__info-about'>
											<span className='profile__info-upper'>{t("profile.newPassword")}</span>
											<input className='profile__info-input' {...register('password', {
												required: "You must specify a password",
												minLength: {
													value: 5,
													message: "Password must have at least 5 characters"
												}
											})} type="password" />
											{errors?.password && <p>{errors?.password?.message}</p>}
										</p>
										<p className='profile__info-about'>
											<span className='profile__info-upper'>{t("profile.confirmPassword")}</span>
											<input className='profile__info-input' {...register('confirmPwd', {
												validate: value =>
													value === password.current || "The password do not match"
											})} type="password" />
											{errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
										</p>
									</div> : ''
									}
									{passwordChange ?
										<button className='profile__info-save' type='submit'>{t("profile.save")}</button> : ''}
								</form>
								<div className='profile__content'>
									<div className="profile__bottom-info">
										<h3 className='profile__content-title'>{t("profile.subscribe")}</h3>
										<span className='profile__content-footer'>
											<input type="checkbox" /> {t("profile.receive")}
										</span>
									</div>
								</div>
								<div className='profile__content'>
									<h3 className='profile__content-title'>{t("separate.yourCoupon")}:</h3>
									<span className='profile__content-footer profile__content-ticket'>
										{randomTicket ? randomTicket.title : ''}
									</span>
								</div>
							</div>
					}

				</div>
			</section>
	)
}

export default Profile