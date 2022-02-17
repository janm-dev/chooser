import type { CardValueShort, CardSuitShort } from "./conversions"
import { suitsS, cardValuesS } from "./conversions"

const int = (min = 0, max: number): number => {
	if (min >= max) {
		return NaN
	}

	if (max - min > 2 ** 32) {
		return NaN
	}

	const maxRand = 2 ** 32 - (2 ** 32 % (max - min))

	let rand

	do {
		rand = crypto.getRandomValues(new Uint32Array(1))[0]
	} while (rand > maxRand)

	return min + (rand % (max - min))
}

export const card = (): { value: CardValueShort; suit: CardSuitShort } => ({
	value: cardValuesS[int(0, cardValuesS.length)],
	suit: suitsS[int(0, suitsS.length)],
})

export const die = (sides: number): number => int(1, sides + 1)
