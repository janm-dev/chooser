<script setup lang="ts">
import type { CardValueShort, CardSuitShort } from "@/conversions"
import { valuesS2L, suitsS2L } from "@/conversions"
import state from "@/state"

defineProps<{
	value: CardValueShort
	suit: CardSuitShort
	fullscreen?: boolean
}>()
</script>

<template>
	<div :class="`card-wrapper${fullscreen ? ' full' : ''}`">
		<div class="card">
			<span class="suit top">{{ suit }}</span>
			<span class="value top">{{ value }}</span>
			<span v-if="fullscreen || !state.isSmall" class="value bottom">{{
				value
			}}</span>
			<span v-if="fullscreen || !state.isSmall" class="suit bottom">{{
				suit
			}}</span>
		</div>
		<h2 v-if="fullscreen" class="desc">
			{{ valuesS2L[value] }} of {{ suitsS2L[suit] }}
		</h2>
	</div>
</template>

<style lang="scss">
.card-wrapper {
	&.full {
		width: calc(100% - 4rem);
		height: calc(100% - 4rem);
		display: grid;
		margin: 2rem;
		grid-template-columns: auto;
		grid-template-rows: auto;
		grid-template-areas: "card";
		cursor: pointer;
	}

	&.full .card {
		margin: auto;
		grid-area: "card";
	}

	.card {
		display: grid;
		margin: 2.5rem;
		grid-template-columns: 7.5rem 7.5rem;
		grid-template-rows: 7.5rem 7.5rem;
		grid-template-areas: "suit-top value-top" "value-bottom suit-bottom";
		width: 15rem;
		height: 25rem;
		row-gap: 10rem;
		border-radius: 2rem;
		border: 1rem solid var(--color-fg);
		cursor: pointer;
	}

	.value,
	.suit {
		font-family: var(--fonts-result);
		font-weight: var(--weight-result);
		font-size: 5rem;
		margin: auto;
	}

	.suit.top {
		grid-area: suit-top;
	}

	.suit.bottom {
		grid-area: suit-bottom;
	}

	.value.top {
		grid-area: value-top;
	}

	.value.bottom {
		grid-area: value-bottom;
	}

	.desc {
		text-align: center;
		margin-bottom: 3rem;
	}
}

@media (max-width: 1200px) {
	.card-wrapper:not(.full) {
		.card {
			margin: 2rem 1rem;
			grid-template-columns: auto;
			grid-template-rows: 7.5rem 7.5rem;
			grid-template-areas: "suit-top" "value-top";
			gap: 0 0;
			width: 8.5rem;
			height: 15rem;
			border-radius: 2rem;
			border: 1rem solid var(--color-fg);
		}

		.bottom {
			display: none;
		}

		.desc {
			display: none;
		}
	}
}

@media (max-width: 650px) {
	.card-wrapper:not(.full) {
		.card {
			margin: 1rem 0.5rem;
			grid-template-rows: 4.5rem 4.5rem;
			width: 5rem;
			height: 9rem;
			border-radius: 1rem;
			border: 0.5rem solid var(--color-fg);
		}

		.value,
		.suit {
			font-size: 2.75rem;
		}
	}
}
</style>
