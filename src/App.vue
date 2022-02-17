<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
	<RouterView v-slot="{ Component, route }">
		<KeepAlive>
			<Component v-if="route.name === 'home'" :is="Component" />
		</KeepAlive>

		<Component v-if="route.name !== 'home'" :is="Component" />
	</RouterView>
</template>

<style lang="scss">
@import "@/assets/fonts.scss";
@import "@/assets/base.scss";

#app {
	position: absolute;
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	min-height: 100%;
	min-width: 100%;
}
</style>
