export interface Message {
	id: string
	timestamp: {
		seconds: number
		nanoseconds: number
	}
	text: string
	username: string
}
