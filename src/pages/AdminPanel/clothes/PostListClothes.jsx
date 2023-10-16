import { useMediaQuery } from '@mui/material';
import React from 'react';
import { List, Datagrid, DeleteButton, TextField, EditButton, TextInput, SimpleList } from 'react-admin';


const postFilters = [
	<TextInput label="Search" source="q" alwaysOn />,
	<TextInput label="Title" source="title" />,
	<TextInput label="Price" source="price" />,
	<TextInput label="Category" source="category" />,
];

const PostListClothes = () => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
	return (
		<List filters={postFilters}>
			{isSmall ? (
		 <SimpleList
		 primaryText={(record) => record.id}
		 secondaryText={(record) => record.title}
		 tertiaryText={(record) => record.price}
	/>


			) : (
				<Datagrid>
					<TextField source="id" />
					<TextField source="title" />
					<TextField source="price" />
					<TextField source="priceSale" />
					<TextField source="category" />

					<EditButton />
					<DeleteButton />
				</Datagrid>
			)}
		</List>
	);
};

export default PostListClothes;