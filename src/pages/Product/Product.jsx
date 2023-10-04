import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PriceSale from '../../components/PriceSale/PriceSale'
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import { CustomContext } from '../../utils/Context'
import SliderProduct from './SliderProduct/SliderProduct'

const Product = () => {

	const params = useParams()

	const {color, setColor, size, setSize, product, setProduct} = useContext(CustomContext)


	useEffect(() => {
		axios(`http://localhost:8080/clothes/${params.id}`)
			.then(({ data }) => {
				setProduct(data)
				setColor(data.colors[0]);
				setSize(data.size[0])
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params])

	return (
		<div className='product'>
			<div className="container">
				{product.title && <>
					<Title title={product.title} />
					<SubTitle category={product.category} name={product.title} />
					<div className="product__content">
						<img src={`../${product.image[color]}`} alt={product.title} className="product__content-img" />
						<div className="product__content-info">
							<PriceSale item={product} />
							<p className='product__content-choose'>Выберите размер</p>
							<ul className='product__content-sizes'>
								{
									product.size.map((item, idx) => (
										<li key={idx} onClick={() => setSize(item)} className={`product__content-size ${item === size ? 'product__content-size_active' : ''} `}>{item}</li>
									))
								}
							</ul>
							<p className='product__content-choose'>Выберите цвет</p>
							<ul className='product__content-sizes'>
								{
									product.colors.map((item, idx) => (
										<li key={idx} onClick={() => setColor(item)} style={{ background: item }} className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`} />
									))
								}
							</ul>
							<div className='product__content-form'>
								<input className='product__content-input' min='1' defaultValue='1' type="number" />
								<button className='product__content-btn' type='button'>Добавить в корзину</button>
							</div>
						</div>
					</div>
					<p className='product__similar'>Связанные товары</p>
					<div className='product__row'>
						<SliderProduct />
					</div>
				</>}
			</div >
		</div >
	)
}

export default Product