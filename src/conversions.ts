export type CardValueLong =
	| "Two"
	| "Three"
	| "Four"
	| "Five"
	| "Six"
	| "Seven"
	| "Eight"
	| "Nine"
	| "Ten"
	| "Jack"
	| "Queen"
	| "King"
	| "Ace"

export type CardValueShort =
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "J"
	| "Q"
	| "K"
	| "A"

export type CardSuitLong = "Hearts" | "Diamonds" | "Clubs" | "Spades"

export type CardSuitShort = "♥" | "♦" | "♣" | "♠"

export type CardColor = "red" | "black"

export const cardValuesS: CardValueShort[] = [
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A",
]

export const cardValuesL: CardValueLong[] = [
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Jack",
	"Queen",
	"King",
	"Ace",
]

export const valuesS2L: Record<CardValueShort, CardValueLong> = {
	"2": "Two",
	"3": "Three",
	"4": "Four",
	"5": "Five",
	"6": "Six",
	"7": "Seven",
	"8": "Eight",
	"9": "Nine",
	"10": "Ten",
	J: "Jack",
	Q: "Queen",
	K: "King",
	A: "Ace",
}

export const valuesL2S: Record<CardValueLong, CardValueShort> = {
	Two: "2",
	Three: "3",
	Four: "4",
	Five: "5",
	Six: "6",
	Seven: "7",
	Eight: "8",
	Nine: "9",
	Ten: "10",
	Jack: "J",
	Queen: "Q",
	King: "K",
	Ace: "A",
}

export const suitsS: CardSuitShort[] = ["♥", "♦", "♣", "♠"]

export const suitsL: CardSuitLong[] = ["Hearts", "Diamonds", "Clubs", "Spades"]

export const suitsS2L: Record<CardSuitShort, CardSuitLong> = {
	"♥": "Hearts",
	"♦": "Diamonds",
	"♣": "Clubs",
	"♠": "Spades",
}

export const suitsL2S: Record<CardSuitLong, CardSuitShort> = {
	Hearts: "♥",
	Diamonds: "♦",
	Clubs: "♣",
	Spades: "♠",
}

export const colorsS: Record<CardSuitShort, CardColor> = {
	"♥": "red",
	"♦": "red",
	"♣": "black",
	"♠": "black",
}

export const colorsL: Record<CardSuitLong, CardColor> = {
	Hearts: "red",
	Diamonds: "red",
	Clubs: "black",
	Spades: "black",
}
