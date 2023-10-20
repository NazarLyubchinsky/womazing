import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CustomContext } from '../../../utils/Context'
import './TicketModal.scss'

const TicketModal = () => {
	const { randomTicket } = useContext(CustomContext)
	const [isModalOpen, setIsModalOpen] = useState(true);

	const { t } = useTranslation();


	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'auto';

	};

	useEffect(() => {
		const modalShown = localStorage.getItem('modalShownAfterRegistration');
		if (modalShown) {
			setIsModalOpen(false);
		}
	}, []);
	return (
		<div>
			{randomTicket ? (
				<>
					{isModalOpen && (
						<div className='modal__ticket' >
							<div className='modal__ticket-content'>
								<span style={{ fontSize: '50px', color: '#fff' }} className='close_modal_button' onClick={closeModal}>
									&times;
								</span>
								<p className='modal__ticket-text'>{t("separate.couponDiscount")}</p>
								<Link onClick={closeModal} to='profile' className='modal__ticket-text' style={{
									marginTop: '40px', fontSize: '30px', textDecoration: 'underline', display: 'flex',
									justifyContent: 'center'
								}}>{randomTicket.title}</Link>
							</div>
						</div>
					)}
				</>
			) : null
			}
		</div >
	)
}

export default TicketModal