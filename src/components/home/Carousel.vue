<template>
	<swiper
		:pagination="{
			dynamicBullets: true
		}"
		:loop="true"
		:slides-per-view="1"
		:auto-height="false"
		:autoplay="{
			delay: 1000000,
			disableOnInteraction: false
		}"
		:modules="[Pagination, Autoplay]"
		class="mySwiper"
	>
		<swiper-slide
			v-for="slide in slides"
			class="slide"
			:style="{ backgroundImage: 'url(' + slide.image + ')' }"
		>
			<img :src="slide.image" alt="" />
			<div class="slide-content gap-12 px-4">
				<div class="text-5xl font-bold text-green">
					{{ slide.title }}
				</div>
				<div class="flex flex-col gap-3">
					<div class="text-3xl font-semibold max-w-[480px] text-[#000]">
						{{ slide.subtitle }}
					</div>
					<div class="text-xl font-medium max-w-[480px] text-[#000]">
						{{ slide.text }}
					</div>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
	{
		image: '/src/assets/images/home/carousel/1.png',
		title: 'M series',
		subtitle: 'All-in-one intelligent cash register equipment',
		text: 'Integrated cash box, auxiliary screen, integrated and flexible deployment'
	},
	{
		image: '/src/assets/images/home/carousel/2.png',
		title: 'D series',
		subtitle: 'Modular intelligent cash register equipment',
		text: 'The main and auxiliary screens can be raised and lowered to adapt to various desktop environments'
	},
	{
		image: '/src/assets/images/home/carousel/3.png',
		title: 'T series',
		subtitle: 'Excellent customer interaction experience',
		text: 'Peripherals can be flexibly and freely combined to adapt to different cash register environments.'
	},
	{
		image: '/src/assets/images/home/carousel/4.png',
		title: 'C2700 series',
		subtitle: 'Integrated self-service terminal',
		text: 'Multiple installation methods, flexible deployment of various scenarios'
	}
]
</script>

<style scoped lang="scss">
@import '../../assets/styles/mixin';
.swiper {
	width: 100%;
	background: #f5f5f5;
	//height: calc(100vh - 96px);
	height: 100%;

	@media (max-width: 1024px) {
		height: 100%;
	}
}

.slide {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: auto;

	img {
		display: none;
	}

	@media (max-width: 1024px) {
		img {
			display: block;
		}
		height: 100%;
		background-image: none !important;
	}

	&[data-swiper-slide-index='0'] {
		background-position: center;
		.slide-content {
			text-align: left;
			align-items: flex-start;
		}
	}
	&[data-swiper-slide-index='1'] {
		background-position: center;
		.slide-content {
			align-items: flex-end;
			max-width: 1000px;
			text-align: right;
		}
	}
	&[data-swiper-slide-index='2'] {
		background-position: center;
		.slide-content {
			text-align: right;
			max-width: 1000px;
			align-items: flex-end;
		}
	}
	&[data-swiper-slide-index='3'] {
		background-position: top;

		.slide-content {
			text-align: left;
			align-items: flex-start;
		}
	}
}

.slide-content {
	@include adaptiveValue('padding-top', 350, 40);
	@include adaptiveValue('padding-bottom', 100, 40);

	@media (max-width: 1024px) {
		@include adaptiveValue('padding-top', 60, 40);
		align-items: flex-start !important;
		text-align: left !important;

		* {
			max-width: 100%;
		}
	}

	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	max-width: $containerWidth + px;
	margin: 0 auto;
}
</style>
