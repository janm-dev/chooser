<script setup lang="ts">
import type { Theme } from "@/state"
import state from "@/state"
import d2Dark from "@/icons/d2.dark.svg?raw"
import d4Dark from "@/icons/d4.dark.svg?raw"
import d6Dark from "@/icons/d6.dark.svg?raw"
import d8Dark from "@/icons/d8.dark.svg?raw"
import d10Dark from "@/icons/d10.dark.svg?raw"
import d12Dark from "@/icons/d12.dark.svg?raw"
import d20Dark from "@/icons/d20.dark.svg?raw"
import d2Light from "@/icons/d2.light.svg?raw"
import d4Light from "@/icons/d4.light.svg?raw"
import d6Light from "@/icons/d6.light.svg?raw"
import d8Light from "@/icons/d8.light.svg?raw"
import d10Light from "@/icons/d10.light.svg?raw"
import d12Light from "@/icons/d12.light.svg?raw"
import d20Light from "@/icons/d20.light.svg?raw"

const dieIcon = (sides: number): string => {
	if (state.theme === "dark") {
		return sides < 1000
			? {
					"2": d2Dark,
					"3": d6Dark,
					"4": d4Dark,
					"5": d10Dark,
					"6": d6Dark,
					"8": d8Dark,
					"10": d10Dark,
					"12": d12Dark,
					"20": d20Dark,
					"100": d10Dark,
					"1000": d10Dark,
			  }[sides] || d20Dark
			: d2Dark
	} else {
		return sides < 1000
			? {
					"2": d2Light,
					"3": d6Light,
					"4": d4Light,
					"5": d10Light,
					"6": d6Light,
					"8": d8Light,
					"10": d10Light,
					"12": d12Light,
					"20": d20Light,
					"100": d10Light,
					"1000": d10Light,
			  }[sides] || d20Light
			: d2Light
	}
}

defineProps<{
	value: number
	sides: number
	fullscreen?: boolean
}>()
</script>

<template>
	<div :class="`die-wrapper${fullscreen ? ' full' : ''}`">
		<div class="die">
			<div class="die-icon" v-html="dieIcon(sides)"></div>
			<span class="die-text">{{ value }}</span>
		</div>
		<h2 class="desc">{{ value }}/{{ sides }}</h2>
	</div>
</template>

<style lang="scss">
.die-wrapper {
	margin: 2.5rem;

	.die {
		display: grid;
		cursor: default;
		grid-template-columns: auto;
		grid-template-rows: auto;
		grid-template-areas: "die";
	}

	.die-icon {
		grid-area: die;
		margin: auto;
		width: 25rem;
		height: 25rem;
	}

	.die-text {
		grid-area: die;
		margin: auto;
		font-family: var(--fonts-heading);
		font-weight: var(--weight-heading);
		font-size: 5rem;
	}

	.desc {
		font-family: var(--fonts-bold);
		font-weight: var(--weight-bold);
		font-size: 2rem;
		text-align: center;
		margin-top: 0.2rem;
	}
}

@media (max-width: 1300px) {
	.die-wrapper {
		margin: 0.5rem 1.5rem;

		.die-icon {
			width: 15rem;
			height: 15rem;
		}

		.die-text {
			font-size: 3.5rem;
		}
	}
}

@media (max-width: 600px) {
	.die-wrapper {
		margin: 0.25rem 0.5rem;

		.die-icon {
			width: 10rem;
			height: 10rem;
		}

		.die-text {
			font-size: 2rem;
		}

		.desc {
			font-size: 1rem;
			margin-top: 0.1rem;
		}
	}
}

@media (max-width: 500px) {
	.die-wrapper {
		margin: 0.1rem 0.25rem;

		.die-icon {
			width: 8.5rem;
			height: 8.5rem;
		}

		.die-text {
			font-size: 1.5rem;
		}

		.desc {
			font-size: 0.75rem;
			margin-top: 0;
		}
	}
}

@media (max-width: 380px) {
	.die-wrapper {
		.die-icon {
			width: 7rem;
			height: 7rem;
		}
	}
}
</style>
