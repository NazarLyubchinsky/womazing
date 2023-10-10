import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useParams } from 'react-router-dom'
import Preloader from '../../components/Preloader/Preloader'
import PriceSale from '../../components/PriceSale/PriceSale'
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import { CustomContext } from '../../utils/Context'
import SliderProduct from './SliderProduct/SliderProduct'

const Product = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const params = useParams()

	const { color, setColor, size, setSize, product, setProduct, addCart, user, shop, getAllClothes } = useContext(CustomContext)

	const [count, setCount] = useState(1)
	const [sale, setSale] = useState(false);
	const [saleCount, setSaleCount] = useState('');

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
	}, [location, shop])


	return (
		<div className='product'>
			<div className="container">
				{product.title ? <>
					<Title title={product.title} />
					<SubTitle category={product.category} name={product.title} />
					<div className="product__content" >
						<img src={`../${product.image[color]}`} alt={product.title} className="product__content-img" />
						<div className="product__content-info">
							{
								!product.priceSale ?
									<>
										{sale ? <input placeholder='%' value={saleCount} onChange={(e) => setSaleCount(e.target.value)} type="number" /> : ''}

										<button type='button' onClick={() => {
											if (sale) {
												const discountedPrice = product.price - (product.price / 100 * saleCount);
												const roundedDiscountedPrice = parseFloat(discountedPrice.toFixed(2));
												axios.patch(`http://localhost:8080/clothes/${product.id}`, { priceSale: roundedDiscountedPrice  })
													.then(() => {
														getAllClothes();
														setSaleCount(0)
													})
											}
											setSale(!sale);
										}}>Добавить {sale ? '' : 'скидку'}</button>
									</>
									: ''
							}

							<PriceSale saleCount={saleCount} item={product} />
							<p className='product__content-choose'>{t("product.selectSize")}</p>
							<ul className='product__content-sizes'>
								{
									product.size.map((item, idx) => (
										<li key={idx} onClick={() => setSize(item)} className={`product__content-size ${item === size ? 'product__content-size_active' : ''} `}>{item}</li>
									))
								}
							</ul>
							<p className='product__content-choose'>{t("product.selectColor")}</p>
							<ul className='product__content-sizes'>
								{
									product.colors.map((item, idx) => (
										<li key={idx} onClick={() => setColor(item)} style={{ background: item }} className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`} />
									))
								}
							</ul>
							{
								product.inStock ? <p className='product__content-choose'>{t("separate.inStock")}: {product.inStock}</p> : <p className='product__content-choose'>{t("separate.notStock")}</p>
							}
							<div className='product__content-form'>
								{user.login ? (
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
											})} type='button'>{t("product.addToCart")}</button>
										</>
									) : (
										// Product is not in stock
										null
									)
								) : (
									// User is not logged in
									<Link className='product__content-btn' to="/login">{t("product.signInToAddToCart")}</Link>
								)}
							</div>
						</div>
					</div>
					<p className='product__similar'>{t("product.relatedProducts")}</p>
					<div className='product__row'>
						<SliderProduct />
					</div>
				</> : <Preloader />}
			</div >
		</div >
	)
}

export default Product