<template>
	<div class="purpose pb-24 sm:pb-32">
		<div class="purpose__container">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-4xl font-bold tracking-tight text-green sm:text-5xl">
					Our purpose
				</h2>
			</div>
			<div class="mx-auto mt-10">
				<dl class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div
						v-for="stat in stats"
						:key="stat.name"
						class="flex gap-2 flex-col-reverse items-center justify-end shadow-2xl transition-all hover:scale-105 cursor-pointer"
					>
						<dt
							class="text-lg font-semibold leading-7 text-green text-center p-4"
						>
							{{ stat.name }}
						</dt>
						<img :src="stat.image" alt="" class="w-full object-cover" />
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const stats = [
	{
		name: 'To become a leading provider of comprehensive services for business intelligence devices',
		image: '/src/assets/images/about/purpose/1.jpg'
	},
	{
		name: 'Honesty and happiness, positive and innovative',
		image: '/src/assets/images/about/purpose/2.jpg'
	},
	{
		name: 'Accompany customers to grow together',
		image: '/src/assets/images/about/purpose/3.jpg'
	}
]
</script>

<style scoped></style>
