<template>
	<div class="product-range py-24 sm:py-32">
		<div class="product-range__container">
			<div class="mx-auto max-w-5xl lg:mx-0">
				<h2 class="text-4xl font-bold tracking-tight text-green sm:text-5xl">
					Maintenance Service Product Range
				</h2>
			</div>
			<div
				class="mx-auto mt-10 flex md:flex-col flex-row md:justify-normal justify-between gap-10"
			>
				<div
					class="relative py-9 w-full flex gap-6 md:flex-row flex-col justify-end lg:justify-center lg:bg-[left] md:bg-[100%] md:bg-[url(/src/assets/images/services/product-range/hardware/bg.png)] bg-contain bg-no-repeat"
				>
					<div
						v-for="item in hardware"
						class="flex flex-col items-center gap-2.5"
					>
						<img :src="item.image" alt="" class="w-16 h-16 lg:h-14 lg:w-14" />
						<p class="text-gray text-xl md:text-base lg:text-lg font-medium">
							{{ item.title }}
						</p>
					</div>
				</div>
				<div
					class="relative py-9 w-full flex gap-6 md:flex-row flex-col justify-start lg:justify-center lg:bg-[right] md:bg-[100%] md:bg-[url(/src/assets/images/services/product-range/software/bg.png)] bg-contain bg-no-repeat"
				>
					<div
						v-for="item in software"
						class="flex flex-col items-center gap-2.5"
					>
						<img :src="item.image" alt="" class="w-16 h-16 lg:h-14 lg:w-14" />
						<p class="text-gray text-xl md:text-base lg:text-lg font-medium">
							{{ item.title }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const hardware = [
	{
		title: 'Cashier Equipment',
		image: '/src/assets/images/services/product-range/hardware/1.png'
	},
	{
		title: 'Office Equipment',
		image: '/src/assets/images/services/product-range/hardware/2.png'
	},
	{
		title: 'Network Equipment',
		image: '/src/assets/images/services/product-range/hardware/3.png'
	},
	{
		title: 'Other IT Equipment',
		image: '/src/assets/images/services/product-range/hardware/4.png'
	}
]

const software = [
	{
		title: 'Operating System',
		image: '/src/assets/images/services/product-range/software/1.png'
	},
	{
		title: 'Business Software',
		image: '/src/assets/images/services/product-range/software/2.png'
	},
	{
		title: 'Office Software',
		image: '/src/assets/images/services/product-range/software/3.png'
	},
	{
		title: 'System Configuration',
		image: '/src/assets/images/services/product-range/software/4.png'
	}
]
</script>

<style scoped lang="scss"></style>
