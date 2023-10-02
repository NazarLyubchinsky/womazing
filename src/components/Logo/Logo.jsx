import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'


const Logo = () => {
	return (
		<Link to='/' className='logo'>
			<img src={logo} alt="Logo" />
			Womazing
		</Link>
	)
}

export default Logo