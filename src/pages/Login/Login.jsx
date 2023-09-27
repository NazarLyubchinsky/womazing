import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<section>
			<form >
				<h2>login</h2>
				<input type="email" placeholder='email' />
				<br />
				<br />
				<input type="password" placeholder='password' />
				<br />
				<br />
				<button type='submit'>login</button>

				<p>dont accout <Link to='/register'>register</Link></p>
			</form>
		</section>
	)
}

export default Login