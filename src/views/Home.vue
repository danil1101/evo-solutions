<template>
	<div class="page">
		<Carousel />
		<OurBusiness />
		<Customers />
		<About />
	</div>
</template>

<script setup lang="ts">
import About from '../components/home/About.vue'
import Carousel from '../components/home/Carousel.vue'
import OurBusiness from '../components/home/OurBusiness.vue'
import Customers from '../components/home/Customers.vue'
</script>

<style lang="scss" scoped></style>
