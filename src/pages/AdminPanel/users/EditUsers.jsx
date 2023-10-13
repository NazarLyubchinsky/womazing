import React from 'react';
import {  Edit, SimpleForm,TextInput } from 'react-admin';


const EditUsers = (props) => {
	return (
		<Edit title={'Изменить пользователя'} {...props}>
			<SimpleForm>
				<TextInput source="email" />
				<TextInput source="password" />
				<TextInput source="login" />
				<TextInput source="phone" />
			</SimpleForm>
		</Edit>
	);
};

export default EditUsers;