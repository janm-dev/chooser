<script setup lang="ts">
import { ref } from "vue"
import { nanoid } from "nanoid"
import Die from "@/components/DieDisplay.vue"
import { die } from "@/randomizations"

const props = defineProps<{ dn: string }>()

interface DieInfo {
	key: string
	value: number
	sides: number
}

const randomDice = (amount: number, sides: number): DieInfo[] => {
	const cards: DieInfo[] = []

	for (let i = 0; i < amount; i++) {
		const value = die(sides)
		cards.push({ key: nanoid(6), value, sides })
	}

	return cards
}

const dnMatches = /(\d+)D(\d+)/giu.exec(props.dn)

const dice = ref<DieInfo[]>(
	randomDice(
		parseInt(dnMatches?.[1] || "3", 10),
		parseInt(dnMatches?.[2] || "6", 10)
	)
)

const roll = (ds: DieInfo[]) => {
	dice.value = ds.map((d) => ({ ...d, value: die(d.sides) }))
}
</script>

<template>
	<div class="dice-wrapper">
		<header class="header">
			<button @click="$router.push({ name: 'home' })" class="button back">
				Back
			</button>
			<button @click="roll(dice)" class="button again">Again</button>
		</header>

		<div class="dice">
			<Die
				v-for="die in dice"
				:key="die.key"
				:sides="die.sides"
				:value="die.value"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.dice-wrapper {
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

	.dice {
		display: flex;
		margin: auto;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
}

@media (max-width: 1200px) {
	.dice-wrapper {
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
