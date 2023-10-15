import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { CustomContext } from '../../../utils/Context';
import Card from '../../../components/Card/Card';


const SliderProduct = () => {
	const { shop, product } = useContext(CustomContext);


	return (
		<>
			<Swiper
				slidesPerView={2}
				navigation={true}
				loop={true}
				autoPlay={true}
				speed={2000}
				autoplay={
					{ delay: 3000 }
				}
				pagination={{
					type: 'fraction',
				}}
				modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
				className="mySwiper"
				breakpoints={{
					640: {
						slidesPerView: 1
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 2
					},
				}}
			>
				{
					shop.filter(item => {
						return item.category === product.category && item.id !== product.id
					}).map(item => (
						<SwiperSlide style={{
							display: "flex",
							justifyContent: 'center',
						}}
							key={item.id}>
							<Card styleWidth={'calc(100% - 33px)'} item={item} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
};

export default SliderProduct;

