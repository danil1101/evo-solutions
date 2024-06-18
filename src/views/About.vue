<template>
	<div class="page">
		<Profile />
		<CompanyValues />
		<Purpose />
		<ManagementSystem />
		<EnterpriseQualification />
		<EnterpriseHonor />
	</div>
</template>

<script setup lang="ts">
import Purpose from '../components/about/Purpose.vue'
import CompanyValues from '../components/about/CompanyValues.vue'
import Profile from '../components/about/Profile.vue'
import ManagementSystem from '../components/about/ManagementSystem.vue'
import EnterpriseQualification from '../components/about/EnterpriseQualification.vue'
import EnterpriseHonor from '../components/about/EnterpriseHonor.vue'
</script>

<style lang="scss" scoped></style>
