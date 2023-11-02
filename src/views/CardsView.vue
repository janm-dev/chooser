<script setup lang="ts">
import { ref } from "vue"
import { nanoid } from "nanoid"
import Card from "@/components/CardDisplay.vue"
import type { CardSuitShort, CardValueShort } from "@/conversions"
import { card } from "@/randomizations"

const props = defineProps<{ amount: string }>()

interface CardInfo {
	key: string
	value: CardValueShort
	suit: CardSuitShort
}

const randomCards = (n: number): CardInfo[] => {
	const cards: CardInfo[] = []

	for (let i = 0; i < n; i++) {
		const { value, suit } = card()
		cards.push({ key: nanoid(6), value, suit })
	}

	return cards
}

const cards = ref<CardInfo[]>(randomCards(parseInt(props.amount, 10)))
const fullscreen = ref<CardInfo | null>(null)

const pick = (cs: CardInfo[]) => {
	cards.value = cs.map((c) => ({ ...c, ...card() }))
}
</script>

<template>
	<div class="cards-wrapper">
		<header class="header">
			<button @click="$router.push({ name: 'home' })" class="button back">
				Back
			</button>
			<button @click="pick(cards)" class="button again">Again</button>
		</header>

		<Card
			v-if="fullscreen"
			v-bind="fullscreen as CardInfo"
			:fullscreen="true"
			@click="fullscreen = null"
		/>
		<div v-else class="cards">
			<Card
				v-for="card in cards"
				:key="card.key"
				:value="card.value"
				:suit="card.suit"
				@click="fullscreen = cards.find((c) => c.key === card.key) || null"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.cards-wrapper {
	min-height: 100%;

	.header {
		display: flex;
		justify-content: space-between;
	}

	.button {
		width: 10rem;
		text-align: center;
		height: 4.5rem;
		font-size: 2.5rem;
		margin: 2.5rem;
		font-family: var(--fonts-bold);
		font-weight: var(--weight-bold);
		background-color: transparent;
		color: var(--color-fg);
		border: 0.5rem solid var(--color-fg);
		border-radius: 1rem;
		outline: none;
		cursor: pointer;
	}

	.button-icon {
		width: 5rem;
		height: 5rem;
	}

	.cards {
		display: flex;
		margin: auto;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
}

@media (max-width: 1200px) {
	.cards-wrapper {
		.button {
			width: 5rem;
			height: 2rem;
			font-size: 1.5rem;
			margin: 1rem;
			border: none;

			text-decoration: underline;
			text-decoration-style: dotted;
			text-decoration-thickness: 0.2rem;
			text-decoration-color: var(--color-fg);

			&:hover {
				text-decoration-color: var(--color-fg);
				text-decoration-style: solid;
			}
		}
	}
}
</style>
