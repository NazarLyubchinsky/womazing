import React from 'react'
import Collection from './Collection/Collection';
import Important from './Important/Important';
import New from './New/New';
import Team from './Team/Team';

const Home = () => {
	return (
		<>
			<New />
			<Collection />
			<Important />
			<Team />
		</>
	)
}

export default Home