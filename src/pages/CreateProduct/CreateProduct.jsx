import axios from 'axios'
import React, { useState } from 'react'

import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CustomContext } from '../../utils/Context'

import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import CreateColors from './CreateColors'
import CreateSizes from './CreateSizes'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
	const [sizes, setSizes] = useState([])
	const [colors, setColors] = useState([])

	const { getAllClothes, API_BASE_URL } = useContext(CustomContext)

	const navigate = useNavigate()

	const { handleSubmit, register } = useForm()

	const createProduct = (data) => {
		const imageName = data.image[0].name;
		const imageObj = {};
		for (const color of Object.keys(data.image)) {
			imageObj[color] = 'Shop/' + imageName;
		 }
console.log(data.image)
		axios.post(`${API_BASE_URL}/clothes`, {
			...data,
			colors,
			size: sizes,
			// image: 'Shop/' + data.image[0].name
			image: imageObj
		}).then(() => {
			getAllClothes();
			navigate('/shop')

		})
	};
	return (
		<section className='create'>
			<div className="container">
				<Title title='Создать продукт' />
				<SubTitle shop='Магазин' name='Создание товара' />
				<form className='create__form' onSubmit={handleSubmit(createProduct)}>
					<div className='create__form-content'>
						<div className='create__form-block'>
							<label htmlFor="title">Название</label>
							<input {...register('title')} type="text" id='title' />
						</div>
						<div className='create__form-block'>
							<label htmlFor="price">Цена</label>
							<input {...register('price')} type="number" id='price' />
						</div>
						<div className='create__form-block'>
							<label htmlFor="inStock">Количество</label>
							<input {...register('inStock')} type="number" id='inStock' />
						</div>
						<div className='create__form-block'>
							<label htmlFor="image">Картинка</label>
							<input {...register('image')} type="file" id='image' />
						</div>
						<div>
							<ul className='create__form-colors'>
								<CreateColors colors={colors} setColors={setColors} color='blue' />
								<CreateColors colors={colors} setColors={setColors} color='black' />
								<CreateColors colors={colors} setColors={setColors} color='white' />
								<CreateColors colors={colors} setColors={setColors} color='red' />
								<CreateColors colors={colors} setColors={setColors} color='green' />
								<CreateColors colors={colors} setColors={setColors} color='orange' />
							</ul>
						</div>
						<div>
							<ul className='create__form-sizes'>
								<CreateSizes sizes={sizes} setSizes={setSizes} size='XS' />
								<CreateSizes sizes={sizes} setSizes={setSizes} size='S' />
								<CreateSizes sizes={sizes} setSizes={setSizes} size='M' />
								<CreateSizes sizes={sizes} setSizes={setSizes} size='L' />
								<CreateSizes sizes={sizes} setSizes={setSizes} size='XL' />
								<CreateSizes sizes={sizes} setSizes={setSizes} size='XXL' />
							</ul>
						</div>
						<div className='create__form-block'>
							<label htmlFor="category">Категория</label>
							<select className='create__form-select'{...register('category')} id='category'>
								<option >hoody</option>
								<option >suits</option>
								<option >sweatshirt</option>
								<option >tshort</option>
							</select>
						</div>
						<button className='create__form-btn' type='submit'>Создать</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default CreateProduct

