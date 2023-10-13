import React from 'react';
import { List, Datagrid, DeleteButton, TextField, EditButton, TextInput} from 'react-admin';


const postFilters = [
	<TextInput label="Search" source="q" alwaysOn />,
	<TextInput label="Title" source="title" />,
	<TextInput label="Price" source="price" />,
	<TextInput label="Category" source="category" />,
];

const PostListClothes = () => {
	return (
		<List filters={postFilters}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="title" />
				<TextField source="price" />
				<TextField source="priceSale" />
				<TextField source="category" />

				<EditButton />
				<DeleteButton />
			</Datagrid>
		</List>
	);
};

export default PostListClothes;