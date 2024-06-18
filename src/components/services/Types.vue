<template>
	<div class="types pt-16">
		<div class="types__container">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-4xl font-bold tracking-tight text-green sm:text-5xl">
					Types of Operational Services
				</h2>
			</div>
			<div
				class="mt-10 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:space-y-0"
			>
				<div v-for="type in types" :key="type.name" class="flex flex-col">
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 lg:h-14 lg:w-14"
					>
						<img :src="type.image" alt="" />
					</div>
					<h3 class="mb-2 text-xl font-bold text-green flex-1">
						{{ type.name }}
					</h3>
					<p class="text-gray text-base">
						Plan it, create it, launch it. Collaborate seamlessly with all the
						organization and hit your marketing goals every month with our
						marketing plan.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const types = [
	{ name: 'Open Store', image: '/images/services/types/1.png' },
	{
		name: 'Software and Hardware Installation',
		image: '/images/services/types/2.png'
	},
	{
		name: 'Software and Hardware Upgrades',
		image: '/images/services/types/3.png'
	},
	{
		name: 'Software and Hardware After-sales',
		image: '/images/services/types/4.png'
	},
	{
		name: 'Specific On-duty',
		image: '/images/services/types/5.png'
	},
	{ name: 'Inventory', image: '/images/services/types/6.png' },
	{ name: 'On-site', image: '/images/services/types/7.png' },
	{ name: 'Close Store', image: '/images/services/types/8.png' }
]
</script>

<style scoped></style>
