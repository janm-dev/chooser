<script setup lang="ts">
import d2 from "@/icons/d2.dark.svg?raw"
import d4 from "@/icons/d4.dark.svg?raw"
import d6 from "@/icons/d6.dark.svg?raw"
import d8 from "@/icons/d8.dark.svg?raw"
import d10 from "@/icons/d10.dark.svg?raw"
import d12 from "@/icons/d12.dark.svg?raw"
import d20 from "@/icons/d20.dark.svg?raw"

const dieIcon = (sides: number): string =>
	sides < 1000
		? {
				"2": d2,
				"3": d6,
				"4": d4,
				"5": d10,
				"6": d6,
				"8": d8,
				"10": d10,
				"12": d12,
				"20": d20,
				"100": d10,
				"1000": d10,
		  }[sides] || d20
		: d2

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
