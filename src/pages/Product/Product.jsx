import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preloader from '../../components/Preloader/Preloader'
import PriceSale from '../../components/PriceSale/PriceSale'
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import { CustomContext } from '../../utils/Context'
import SliderProduct from './SliderProduct/SliderProduct'

const Product = () => {

	const params = useParams()

	const { color, setColor, size, setSize, product, setProduct, addCart, user } = useContext(CustomContext)

	const [count, setCount] = useState(1)

	useEffect(() => {
		axios(`http://localhost:8080/clothes/${params.id}`)
			.then(({ data }) => {
				setProduct(data)
				setColor(data.colors[0]);
				setSize(data.size[0])
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params])


	return (
		<div className='product'>
			<div className="container">
				{product.title ? <>
					<Title title={product.title} />
					<SubTitle category={product.category} name={product.title} />
					<div className="product__content"  >
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
							{
								product.inStock ? <p className='product__content-choose'>В наличие: {product.inStock}</p> : <p className='product__content-choose'>нет в наличие</p>
							}
							<div className='product__content-form'>
								{/* {product.inStock  ? <>
									<input className='product__content-input' min='1' max={product.inStock} type="number" value={count} onChange={(e) => setCount(e.target.value)} />
									<button className='product__content-btn' onClick={() => addCart({
										id: product.id,
										title: product.title,
										image: product.image,
										color,
										size,
										count,
										price: product.priceSale || product.price,
										category: product.category
									})} type='button'>Добавить в корзину</button>
								</>
									: null
								} */}
								{user.login  ? (
									// User is logged in
									product.inStock ? (
										<>
											<input className='product__content-input' min='1' max={product.inStock} type="number" value={count} onChange={(e) => setCount(e.target.value)} />
											<button className='product__content-btn' onClick={() => addCart({
												id: product.id,
												title: product.title,
												image: product.image,
												color,
												size,
												count,
												price: product.priceSale || product.price,
												category: product.category
											})} type='button'>Добавить в корзину</button>
										</>
									) : (
										// Product is not in stock
									null
									)
								) : (
									// User is not logged in
									<Link  className='product__content-btn' to="/login">Ввійти, щоб додати в корзину</Link>
								)}
							</div>
						</div>
					</div>
					<p className='product__similar'>Связанные товары</p>
					<div className='product__row'>
						<SliderProduct />
					</div>
				</> : <Preloader />}
			</div >
		</div >
	)
}

export default Product