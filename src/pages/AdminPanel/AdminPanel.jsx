import React from 'react'
import './adminPanel.scss'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListClothes from './clothes/PostListClothes';

const AdminPanel = () => {
	return (
		<section className='adminPanel'>
			 <Admin dataProvider={restProvider('http://localhost:3000')}>
				<Resource name="clothes" list={PostListClothes}
				// edit={PostEdit}
				// create={PostCreate}
				// icon={PostIcon}
				/>
			</Admin>
		</section>
	)
}

export default AdminPanel