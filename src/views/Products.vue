<template>
	<div class="page flex flex-col gap-10">
		<div class="wrapper" v-for="(slider, index) in sliders" :key="index">
			<div class="content">
				<div class="product-img">
					<div
						:id="slide.id"
						class="product-img__item"
						:key="slide.id"
						v-for="slide in slider.slides"
					>
						<img alt="star wars" class="product-img__img" :src="slide.target" />
					</div>
				</div>

				<swiper
					:loop="false"
					:modules="[Navigation]"
					:spaceBetween="30"
					effect="fade"
					:navigation="{
						nextEl: '.next',
						prevEl: '.prev'
					}"
					@swiper="swiper => onSwiper(index, swiper)"
					@init="updateActiveSlide(index, 0)"
					@slideChange="updateActiveSlide(index, slider.swiper.activeIndex)"
					class="product-slider"
				>
					<swiper-slide
						class="product-slider__item swiper-slide"
						:data-target="slide.id"
						:key="slide.id"
						v-for="slide in slider.slides"
					>
						<div class="product-slider__card">
							<div class="product-slider__content">
								<h1 class="product-slider__title">
									{{ slide.title }}
								</h1>
								<span class="product-slider__desc">
									{{ slide.desc }}
								</span>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper as SwiperClass } from 'swiper/types'

interface ISlider {
	title: string
	activeIndex: number
	swiper: SwiperClass
	slides: {
		id: string
		title: string
		desc: string
		target: string
	}[]
}

const sliders = ref<ISlider[]>([
	{
		title: 'POS series',
		activeIndex: 0,
		swiper: null,
		slides: [
			{
				id: 'pos-series-1',
				title: 'T SERIES',
				desc: 'Fashionably Tough, Powerfully Performant Enjoy a Smooth Retail Transaction Experience',
				target: '/images/products/pos-series/t-series.png'
			},
			{
				id: 'pos-series-2',
				title: 'K Series',
				desc: 'Desktop  POS. Smart. Bright. Full of Might.',
				target: '/images/products/pos-series/k-series.png'
			},
			{
				id: 'pos-series-3',
				title: 'D Series',
				desc: 'Multi-scenari, Multi-mode, Human-computer interaction experience',
				target: '/images/products/pos-series/d-series.png'
			},
			{
				id: 'pos-series-4',
				title: 'M series',
				desc: 'Fully-integrated, space-saving, flexible deployment',
				target: '/images/products/pos-series/m-series.png'
			},
			{
				id: 'pos-series-5',
				title: 'D Series',
				desc: 'Multi-scenari, Multi-mode, Human-computer interaction experience',
				target: '/images/products/pos-series/d-series.png'
			}
		]
	},
	{
		title: 'Self-service series',
		activeIndex: 0,
		swiper: null,
		slides: [
			{
				id: 'self-service-1',
				title: 'C1 500',
				desc: 'Compact and light, it can be used for',
				target: '/images/products/self-services/c1-500.png'
			},
			{
				id: 'self-service-2',
				title: 'C2 700',
				desc: 'Large screen, ultra-thin design, multi-scene industry-wide coverage',
				target: '/images/products/self-services/c2-700.png'
			},
			{
				id: 'self-service-3',
				title: 'C2 400',
				desc: 'Ultra-thin design, flexible configuration, multi-scene industry-wide coverage',
				target: '/images/products/self-services/c2-400.png'
			}
		]
	},
	{
		title: 'Digital signage',
		activeIndex: 0,
		swiper: null,
		slides: [
			{
				id: 'digital-signage-1',
				title: 'I 1000',
				desc: 'Ultra-clear vision, ultimate enjoyment',
				target: '/images/products/digital-signage/i-1000.jpg'
			},
			{
				id: 'digital-signage-2',
				title: 'I 500',
				desc: 'Ultra-clear vision, ultimate enjoyment',
				target: '/images/products/digital-signage/i-500.png'
			},
			{
				id: 'digital-signage-3',
				title: 'I2 200',
				desc: 'The vision that nuanced details are about to come out',
				target: '/images/products/digital-signage/i2-200.png'
			}
		]
	}
])

const updateActiveSlide = (indexSlider: number, indexSlide: number) => {
	sliders.value[indexSlider].activeIndex = indexSlide
	const target = sliders.value[indexSlider].slides[indexSlide].id
	const container = document.querySelectorAll('.wrapper')[indexSlider]
	container
		.querySelectorAll('.product-img__item')
		.forEach(item => item.classList.remove('active'))
	container.querySelector(`#${target}`)?.classList.add('active')

	const nextButton = document.querySelector('.next')
	const prevButton = document.querySelector('.prev')

	/*if (swiperRef.value.isEnd) {
		prevButton.classList.remove('disabled')
		nextButton.classList.add('disabled')
	} else {
		nextButton.classList.remove('disabled')
	}

	if (swiperRef.value.isBeginning) {
		prevButton.classList.add('disabled')
	} else {
		prevButton.classList.remove('disabled')
	}*/
}

const onSwiper = (index: number, swiper: SwiperClass) => {
	sliders.value[index].swiper = swiper
}
</script>

<style lang="scss" scoped>
.icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	stroke-width: 0;
	stroke: currentColor;
	fill: currentColor;
}

.wrapper {
	width: 100%;
	height: 100vh;
	min-height: 750px;
	background: url(https://nwzimg.wezhan.cn/contents/sitefiles2037/10188038/images/25361812.png)
		center no-repeat;
	background-size: cover;
	position: relative;
	overflow: hidden;
	display: flex;

	@media screen and (max-width: 992px) {
		height: auto;
		min-height: 100vh;
	}
}

.content {
	height: 600px;
	margin: auto;
	width: 100%;
	max-width: 1050px;
	display: flex;
	align-items: center;
	position: relative;

	@media screen and (max-width: 1200px) {
		max-width: 920px;
	}

	@media screen and (max-width: 992px) {
		max-width: 920px;
		margin-top: 100px;
		height: auto;
		min-height: 100vh;
	}

	@media screen and (max-width: 767px) {
		margin-top: 20px;
	}

	@media screen and (max-width: 576px) {
		margin-top: 20px;
		margin-bottom: 20px;
	}
}

.next,
.prev {
	z-index: 22;
	display: inline-flex;
	border: none;
	width: 61px;
	height: 61px;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	position: absolute;
	top: 50%;
	outline: none;
	cursor: pointer;

	&.disabled {
		cursor: not-allowed;
	}

	&:focus {
		outline: none;
	}

	@media screen and (max-width: 992px) {
		top: 170px;
	}
}

.prev {
	left: -30%;
	transform: translate(-100%, -50%);

	@media screen and (max-width: 1200px) {
		left: -21%;
	}

	@media screen and (max-width: 992px) {
		left: 0;
		transform: translate(-50%, -50%);
	}

	@media screen and (max-width: 576px) {
		transform: translate(20%, -50%);
	}
}

.next {
	right: 0;
	transform: translate(50%, -50%);

	@media screen and (max-width: 576px) {
		transform: translate(-20%, -50%);
	}
}

.product {
	&-slider {
		width: 75%;
		height: 85%;
		border-radius: 30px;
		box-shadow: 0 28px 79px 0 rgba(10, 22, 31, 0.35);
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);

		@media screen and (max-width: 1200px) {
			width: 80%;
		}

		@media screen and (max-width: 992px) {
			width: 80%;
			left: 50%;
			transform: translateX(-50%);
			height: auto;
			position: relative;
			top: 0;
			margin-top: 170px;
			margin-bottom: 100px;

			br {
				display: none;
			}
		}

		@media screen and (max-width: 767px) {
			border-radius: 20px;
		}

		@media screen and (max-width: 576px) {
			width: 85%;
			margin-top: 130px;
		}

		&__wrp {
			height: 100%;
		}

		&__item {
			position: relative;
			height: 100%;
			width: 100%;

			@media screen and (max-width: 992px) {
				height: auto;
			}

			&.swiper-slide-active {
				.product-slider__content {
					> * {
						opacity: 1;
						transform: none;

						@for $i from 0 to 15 {
							&:nth-child(#{$i + 1}) {
								transition-delay: $i * 0.2s;
							}
						}
					}
				}
			}
		}

		&__card {
			user-select: none;
			height: 100%;
			display: flex;
			align-items: center;
			width: 100%;
			transition: all 0.5s;
			overflow: hidden;
			position: relative;
			border-radius: 30px;

			@media screen and (max-width: 992px) {
				align-items: flex-start;
			}

			@media screen and (max-width: 767px) {
				border-radius: 20px;
			}
		}

		&__cover {
			border-radius: 30px;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;

			@media screen and (max-width: 767px) {
				border-radius: 20px;
			}
		}

		&__content {
			color: #fff;
			padding-top: 1px;
			position: relative;
			z-index: 2;
			width: 100%;
			padding-left: 250px;
			padding-right: 80px;

			@media screen and (max-width: 1200px) {
				padding-left: 220px;
			}

			@media screen and (max-width: 992px) {
				padding: 20px 60px 100px;
				padding-top: 280px;
				text-align: center;
			}

			@media screen and (max-width: 767px) {
				padding: 20px 30px 50px;
				padding-top: 300px;
			}

			@media screen and (max-width: 576px) {
				padding-top: 220px;
				padding-left: 15px;
				padding-right: 15px;
			}
		}

		&__title {
			margin: 0;
			margin-bottom: 10px;
			font-weight: 900;
			font-size: 41px;
			line-height: 1.2em;
			letter-spacing: 2px;
			opacity: 0;
			transform: translateY(55px);
			transition: all 0.5s;

			@media screen and (max-width: 1200px) {
				font-size: 34px;
			}

			@media screen and (max-width: 576px) {
				font-size: 24px;
			}
		}

		&__desc {
			display: block;
			font-size: 42px;
			opacity: 0;
			transform: translateY(55px);
			transition: all 0.5s;

			@media screen and (max-width: 1200px) {
				font-size: 36px;
			}

			@media screen and (max-width: 576px) {
				font-size: 30px;
			}

			sup {
				top: -20px;
				font-size: 65%;
			}
		}
	}

	&-img {
		position: absolute;
		z-index: 2;
		width: 500px;
		left: 25%;
		transform: translateX(-45%);
		max-height: 500px;
		height: 100%;
		pointer-events: none;

		@media screen and (max-width: 1200px) {
			width: 430px;
			left: 20%;
		}

		@media screen and (max-width: 992px) {
			width: 430px;
			left: 50%;
			transform: translateX(-50%);
			top: 0;
			height: 350px;
		}

		@media screen and (max-width: 767px) {
			width: 100%;
			max-width: 400px;
			top: 30px;
			height: 390px;
		}

		@media screen and (max-width: 576px) {
			max-width: 300px;
			height: 300px;
		}

		&__item {
			display: flex;
			align-items: center;
			position: absolute;
			pointer-events: none;
			user-select: none;
			top: 50%;
			right: 0;
			transform: translateY(-50%) translateX(-130px);
			opacity: 0;
			transition: all 0.3s;

			&.active {
				opacity: 1;
				transform: translateY(-50%) translateX(0);
				transition-delay: 0.3s;
			}

			img {
				object-fit: contain;
				object-position: center right;
			}
		}
	}
}

.social {
	position: absolute;
	bottom: 10px;
	right: 0;
	width: 100%;
	display: flex;
	padding: 20px 55px;
	justify-content: space-between;

	@media screen and (max-width: 576px) {
		flex-direction: column;
		bottom: 0;
	}

	&__item {
		color: rgba(255, 255, 255, 0.75);
		font-family: 'Dosis', sans-serif;
		font-weight: 700;
		letter-spacing: 2px;
		line-height: 1em;
		display: flex;
		align-items: center;
		transition: all 0.3s;

		&:hover {
			color: #fff;
		}

		@media screen and (max-width: 576px) {
			margin-bottom: 10px;
		}
	}

	&__img {
		width: 24px;
		margin-right: 15px;
	}
}
</style>
