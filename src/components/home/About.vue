<template>
	<div class="about py-24 sm:py-32">
		<div class="about__container">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-4xl font-bold tracking-tight text-green sm:text-5xl">
					About Us
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
					cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
					aliqua.
				</p>
			</div>
			<div class="mx-auto mt-10">
				<dl
					class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5"
				>
					<div
						v-for="stat in stats"
						:key="stat.name"
						class="flex gap-2 flex-col-reverse items-center justify-end"
					>
						<dt class="text-base leading-7 text-gray-300 text-center">
							{{ stat.name }}
						</dt>
						<dd class="text-4xl font-bold leading-9 tracking-tight text-green">
							{{ stat.value }}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script setup>
const stats = [
	{ name: 'Sales Service Center', value: '78+' },
	{ name: 'Service Outlets', value: '1500+' },
	{ name: 'Chain Top 100 Penetration Rate', value: '70%+' },
	{ name: 'Annual Production Capacity', value: '500,000+' },
	{ name: 'Installation and Operation of Equipment', value: '3,000,000+' }
]
</script>
