<template>
	<div class="company-values py-24 sm:py-32">
		<div class="company-values__container">
			<div class="mx-auto">
				<h2 class="text-4xl font-bold tracking-tight text-green sm:text-5xl">
					Types of Operational Services
				</h2>
			</div>
			<div
				class="mt-10 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0"
			>
				<div
					v-for="stat in stats"
					:key="stat.name"
					class="flex flex-col items-center"
				>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 lg:h-14 lg:w-14"
					>
						<img :src="stat.icon" alt="" />
					</div>
					<h3 class="mb-2 text-2xl font-bold text-green">
						{{ stat.name }}
					</h3>
					<p class="text-base leading-7 text-gray-300 text-center">
						{{ stat.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const stats = [
	{
		name: 'Innovation',
		description:
			'Combining customer needs with industry trends, new technologies such as Internet of Things (IoT) and 5G are used to provide innovative products and business models',
		icon: '/src/assets/images/about/company-values/1.svg'
	},
	{
		name: 'Intelligent',
		description:
			'Build intelligent solutions for business enterprises around cloud platforms, middle platforms, and big data',
		icon: '/src/assets/images/about/company-values/2.svg'
	},
	{
		name: 'Initiate',
		description:
			'As the company undergoes restructuring and enters a new phase, it aims to embrace a fresh image and embark on a journey into the realm of digital new retail',
		icon: '/src/assets/images/about/company-values/3.svg'
	}
]
</script>

<style scoped></style>
