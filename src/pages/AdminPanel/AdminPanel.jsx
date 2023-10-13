import React from 'react'
import './adminPanel.scss'
import { Admin, Resource } from 'react-admin';
// import restProvider from 'ra-data-simple-rest';
import PostListClothes from './clothes/PostListClothes';
import EditClothes from './clothes/EditClothes';
import CreateClothes from './clothes/CreateClothes';
import CreateUsers from './users/CreateUsers';
import EditUsers from './users/EditUsers';
import PostListUsers from './users/PostListUsers';
import PostListOrders from './orders/PostListOrders';
import EditOrders from './orders/EditOrders';


import jsonServerProvider from 'ra-data-json-server'; 
const dataProvider = jsonServerProvider('http://localhost:8080'); 

const AdminPanel = () => {
	return (
		<section className='adminPanel'>
			<Admin dataProvider={dataProvider}>
				<Resource name="clothes" list={PostListClothes} edit={EditClothes} create={CreateClothes} />
				<Resource create={CreateUsers} edit={EditUsers} name="users" list={PostListUsers} />
				<Resource edit={EditOrders} name="orders" list={PostListOrders} />
			</Admin>
		</section>
	)
}

export default AdminPanel