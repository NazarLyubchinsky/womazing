import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import NavigateList from './NavigateList/NavigateList';


const BurgerModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleButtonClick = () => {
		setIsModalOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = 'auto';

	};

	return (
		<>
			<div className='modal_button_container'>
				<div className='open_modal_button' onClick={handleButtonClick}>
					<MenuIcon />
				</div>

				{isModalOpen && (
					<>
						<div className='modal_overlay' onClick={closeModal}>
						</div>
						<div className='modal_content'>
							<section className='sidebar' >
								<span className='close_modal_button' onClick={closeModal}>
									&times;
								</span>
								<Link to='/' className='sidebar__title' onClick={closeModal}>WOMAZING</Link>
								<nav className='nav'>
									<ul className='menu'>
										<li >
											<NavLink
												className={({ isActive }) =>
													`$'link} ${isActive ? 'active' : ''}`
												}
												onClick={closeModal}
											>
											</NavLink>
										</li>
									</ul>
									<NavigateList styleProp='list__modal' closeModal={closeModal} />
								</nav>
							</section >

						</div>
					</>
				)}
			</div>
		</>
	)
}

export default BurgerModal