import { createContext, useState } from "react"

export const CustomContext = createContext()
export const Context = (props) => {

	const [user, setUser] = useState({
		login: ''
	});

	const value = {
		user,
		setUser
	}

	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
}