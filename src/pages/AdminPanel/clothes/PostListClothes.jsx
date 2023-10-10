import React from 'react'
import { List, Datagrid,  DateField, TextField, EditButton,  } from 'react-admin';

const PostListClothes = (props) => {
	return (
		<List>
			<Datagrid>
				<TextField source="id" />
				<TextField source="title" />
				<DateField source="price" />
				<TextField source="priceSale" />
				<TextField source="category" />
				<EditButton />
			</Datagrid>
		</List>
	)
}

export default PostListClothes