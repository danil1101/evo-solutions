<template>
	<header class="absolute inset-x-0 top-0 z-50">
		<div class="header__container">
			<nav class="flex items-center justify-between py-6" aria-label="Global">
				<div class="flex lg:flex-1">
					<a href="/" class="-m-1.5 p-1.5">
						<img class="h-12 w-auto" src="/images/logo.svg" alt="" />
					</a>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = true"
					>
						<Bars3Icon class="h-8 w-8" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="text-lg font-semibold leading-6 text-gray-900"
						>{{ item.name }}</a
					>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="#footer"
						class="inline-flex items-center rounded-md bg-green px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Contact Us
					</a>
				</div>
			</nav>
			<Dialog
				class="lg:hidden"
				@close="mobileMenuOpen = false"
				:open="mobileMenuOpen"
			>
				<div class="fixed inset-0 z-50" />
				<DialogPanel
					class="fixed inset-y-0 shadow-2xl flex flex-col right-0 z-50 bg-white w-full overflow-y-auto px-4 py-8 sm:max-w-72"
				>
					<div class="flex items-center justify-end">
						<button
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-gray-700"
							@click="mobileMenuOpen = false"
						>
							<XMarkIcon class="h-8 w-8" aria-hidden="true" />
						</button>
					</div>
					<div
						class="mt-2 divide-y divide-gray-500/10 h-full flex-col flex justify-between"
					>
						<div class="space-y-2 py-6">
							<a
								v-for="item in navigation"
								:key="item.name"
								:href="item.href"
								class="-mx-3 block px-3 py-2 text-xl font-semibold leading-7"
								>{{ item.name }}
							</a>
						</div>
						<a
							href="#footer"
							@click="onClick"
							class="flex w-full justify-center items-center rounded-md bg-green px-4 py-3 text-base font-semibold text-white shadow-sm"
						>
							Contact Us
						</a>
					</div>
				</DialogPanel>
			</Dialog>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
	{ name: 'Products', href: '/products' },
	{ name: 'Services', href: '/services' },
	{ name: 'About', href: '/about' }
]

const mobileMenuOpen = ref(false)

const onClick = () => {
	mobileMenuOpen.value = false
}
</script>
