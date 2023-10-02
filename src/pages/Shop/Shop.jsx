import React, { memo, useContext, useEffect, useRef } from 'react'
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import { CustomContext } from '../../utils/Context';
import { Pagination } from 'antd';
import ShopList from './ShopList/ShopList';
import QuantityGoods from './QuantityGoods/QuantityGoods';
import Card from '../../components/Card/Card';
import { useTranslation } from 'react-i18next';

const Shop = () => {
	const { t } = useTranslation();

	const { shop, status, page, setPage } = useContext(CustomContext)
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
				<QuantityGoods shop={shop} FilterCategory={FilterCategory} FilterPage={FilterPage} />
				<div className='shop__row'>
					{
						shop.filter(FilterCategory).filter(FilterPage).map((item) => (
							<Card key={item.id} item={item} />
						))
					}
				</div>
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