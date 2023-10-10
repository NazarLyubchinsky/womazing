import React, { memo, useContext, useEffect, useRef } from 'react'

import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card';

import ShopList from './ShopList/ShopList';
import QuantityGoods from './QuantityGoods/QuantityGoods';
import { CustomContext } from '../../utils/Context';

import { useTranslation } from 'react-i18next';
import { Pagination } from 'antd';
import ShopSorts from './ShopSorts/ShopSorts';
import Preloader from '../../components/Preloader/Preloader';
import { Link } from 'react-router-dom';


const Shop = () => {
	const { t } = useTranslation();




	const { shop, status, page, setPage, sort, isLoading , user} = useContext(CustomContext)
	const isFirstRender = useRef(true);


	const scrollToTop = () => {
		window.scrollTo({
			top: 320,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		if (!isFirstRender.current) {
			// Check if it's not the initial render
			scrollToTop();
		} else {
			isFirstRender.current = false;
		}
	}, [page]);


	const FilterCategory = (item) => status === 'all' ? item : item.category === status
	const FilterPage = (item, idx) => { return idx + 1 <= page * 9 && idx >= page * 9 - 9 }
	return (
		<section className='shop'>
			<div className='container' >
				<Title title={t("shop.title")} />
				<SubTitle page={t("shop.link2")} />

				<ul className='shop__list'>
					<ShopListMemo className={'shop__item'} classNameActive={'shop__item_active'} />
				</ul>
				<div className='shop__sorts' >
					{
						user.email === 'admin@gmail.com' ? <Link to='/create' className={`sorts__sort`}>
							добавить
						</Link> : <span></span>
				}
					<ShopSorts />
				</div>
				<QuantityGoods shop={shop} FilterCategory={FilterCategory} FilterPage={FilterPage} />
				{
					isLoading ? (
						<Preloader />
					) : (
						<div className='shop__row'>
							{
								shop.sort((a, b) => {
									if (sort === 'big') {
										return (b.priceSale || b.price) - (a.priceSale || a.price)
									} else if (sort === 'less') {
										return (a.priceSale || a.price) - (b.priceSale || b.price)
									} else if (sort === 'discount') {
										return (
											(a.priceSale && b.priceSale && b.priceSale - a.priceSale) ||
											(a.priceSale && -1) ||
											(b.priceSale && 1) ||
											((b.priceSale || b.price) - (a.priceSale || a.price))
										);
									}
									return 0;
								}).filter(FilterCategory).filter(FilterPage).map((item) => (
									<Card styleWidth={'calc(33.33333% - 1.25rem)'} key={item.id} item={item} />

								))
							}
						</div>
					)
				}

				<br />
				<br />
				<br />
				<QuantityGoods shop={shop} FilterCategory={FilterCategory} FilterPage={FilterPage} />

				{
					shop.filter(FilterCategory).length > 9 ? <PaginationMemo style={{
						display: 'flex',
						justifyContent: 'center'
					}} simple onChange={setPage} current={page} total={shop.filter(FilterCategory).length} pageSize={9} /> : ''
				}

			</div>
		</section>
	)
}

const ShopListMemo = memo(ShopList);
const PaginationMemo = memo(Pagination);


export default Shop