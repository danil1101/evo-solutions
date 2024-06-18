<template>
	<main class="flex flex-col min-h-full">
		<PageHeader />
		<router-view />
		<div class="flex-1"></div>
		<PageFooter />
	</main>
</template>

<script setup lang="ts">
import PageHeader from './components/common/Header.vue'
import PageFooter from './components/common/Footer.vue'
</script>

<style lang="scss" scoped></style>
