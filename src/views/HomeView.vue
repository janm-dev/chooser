<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { version } from "@/main"
import cardsIcon from "@/icons/cards.dark.svg"
import diceIcon from "@/icons/dice.dark.svg"
import janmIcon from "@/icons/janm.svg"

const selectInput = (event: FocusEvent) =>
	(event.currentTarget as HTMLInputElement).select()

const cardsAmount = ref(1)
const diceAmount = ref(1)
const diceSides = ref(6)
</script>

<template>
	<div id="main">
		<header class="header" aria-hidden>
			<a href="https://janm.dev/"
				><img class="janm-icon" :src="janmIcon" alt=""
			/></a>
			<a class="janm-text" href="https://janm.dev/"
				><h1 class="janm-text">janm.dev</h1></a
			>

			<a class="source-text" href="https://github.com/janm-dev"
				><h1 class="source-text">{{ version }}</h1></a
			>
			<a class="source-text" href="https://github.com/janm-dev/chooser"
				><h1 class="source-text">source</h1></a
			>
		</header>

		<section id="cards" class="area">
			<img class="category-icon" :src="cardsIcon" alt="Cards" />
			<h2>
				<RouterLink
					class="action"
					:to="{ name: 'cards', params: { amount: cardsAmount } }"
					>Pick</RouterLink
				>
				<input
					type="number"
					v-model="cardsAmount"
					class="small-num spaced-num"
					@focus="selectInput"
				/>
				random {{ cardsAmount === 1 ? "card" : "cards" }}.
			</h2>
		</section>
		<section id="dice" class="area">
			<img class="category-icon" :src="diceIcon" alt="Dice" />
			<h2>
				<RouterLink
					class="action"
					:to="{
						name: 'dice',
						params: { dn: `${diceAmount}D${diceSides}` },
					}"
					>Roll</RouterLink
				>
				<input
					type="number"
					v-model="diceAmount"
					class="small-num spaced-num"
					@focus="selectInput"
				/>
				<input
					type="number"
					v-model="diceSides"
					class="small-num"
					@focus="selectInput"
				/>-sided {{ diceAmount === 1 ? "die" : "dice" }}.
			</h2>
		</section>
	</div>
</template>

<style lang="scss">
#main {
	display: grid;
	width: 100%;
	height: 100%;
	min-width: 100%;
	min-height: 100%;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas: "header header" "cards dice";

	#cards {
		grid-area: cards;
	}

	#dice {
		grid-area: dice;
	}

	.header {
		grid-area: header;
		display: flex;
		justify-content: space-between;
		padding: 0 2.5rem;
		gap: 2.5rem;
	}

	.janm-icon {
		width: 8rem;
		height: 8rem;
		transition: opacity var(--animation-time-long);
		opacity: 0;

		&:hover {
			opacity: 1;
		}
	}

	.janm-text {
		height: 8rem;
		transition: opacity var(--animation-time-long);
		opacity: 0;
		font-family: var(--fonts-heading);
		font-weight: var(--weight-heading);
		font-size: 3rem;
		color: var(--color-primary);
		text-decoration-color: var(--color-primary);

		&:hover {
			opacity: 1;
			text-decoration-color: var(--color-primary);
		}
	}

	.source-text {
		height: 8rem;
		transition: opacity var(--animation-time-long);
		opacity: 0;
		font-family: var(--fonts-heading);
		font-weight: var(--weight-heading);
		font-size: 3rem;
		color: var(--color-fg);
		text-decoration-color: var(--color-fg);

		&:hover {
			opacity: 1;
			text-decoration-color: var(--color-fg);
		}
	}

	.action {
		color: var(--color-fg);
		text-decoration: underline;
		text-decoration-style: dotted;
		text-decoration-thickness: 0.2rem;
		text-decoration-color: var(--color-fg);

		&:hover {
			text-decoration-color: var(--color-fg);
			text-decoration-style: solid;
		}
	}

	.category-icon {
		max-width: 80%;
	}

	.area {
		padding: 0;
		margin: 0 auto auto auto;
		text-align: center;
	}

	.small-num {
		width: 4ch;
		text-align: center;
		height: 1.5rem;
		font-size: 1.25rem;
		font-family: var(--fonts-bold);
		font-weight: var(--weight-bold);
		background-color: transparent;
		color: var(--color-fg);
		border: 0.2rem solid var(--color-fg);
		border-radius: 0.5rem;
		outline: none;

		&.spaced-num {
			margin-left: 0.8rem;
			margin-right: 0.8rem;
		}

		&:focus {
			outline-color: var(--color-fg);
			outline-style: solid;
			outline-offset: -0.2rem;
			outline-width: 0.5rem;
		}

		// Disable buttons
		-moz-appearance: textfield;
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
}

@media (max-width: 1200px) {
	#main {
		grid-template-columns: 100%;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: "cards" "dice";
	}

	.header {
		display: none;
	}

	.area {
		margin: auto;
	}

	.category-icon {
		max-height: 40vh;
	}
}
</style>
