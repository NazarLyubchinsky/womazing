import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, SelectArrayInput} from 'react-admin';

const EditClothes = () => {


	return (
		<Edit title='изменить вещь' >
			<SimpleForm>
				<TextInput disabled source="id" />
				<TextInput disabled source="priceSale" />
				<TextInput source="image[black]" />

				<TextInput source="title" />
				<NumberInput source="price" />
				<NumberInput source="inStock" />
				<SelectInput source="category" choices={[
					{
						id: "hoody",
						name: "hoody"
					},
					{
						id: "sportsuit",
						name: "sportsuit"
					},
					{
						id: "tshort",
						name: "tshort"
					},
					{
						id: "sweatshirt",
						name: "sweatshirt"
					},
				]} />
				<SelectArrayInput source="size" choices={[
					{
						id: "xs",
						name: "xs"
					},
					{
						id: "s",
						name: "s"
					},
					{
						id: "m",
						name: "m"
					},
					{
						id: "l",
						name: "l"
					},
					{
						id: "xl",
						name: "xl"
					},
					{
						id: "xxl",
						name: "xxl"
					},
				]} />
				<SelectArrayInput source="colors" choices={[
					{
						id: "black",
						name: "black"
					},
					{
						id: "white",
						name: "white"
					},
					{
						id: "green",
						name: "green"
					},
					{
						id: "blue",
						name: "blue"
					},
					{
						id: "orange",
						name: "orange"
					},
					{
						id: "red",
						name: "red"
					},
				]} />
			</SimpleForm>
		</Edit>
	)
}

export default EditClothes