// Custom hook for handling state in localStorage with fallback to a default value.
import { useEffect, useMemo, useState } from 'react'

const useLocalStorage = (key: string, initialValue: unknown) => {
	// Check if the code is running in a browser environment (client-side).
	const isClient = typeof window !== 'undefined'

	const storedValue = useMemo(() => {
		if (isClient) {
			try {
				const item = localStorage.getItem(key)
				return item ? JSON.parse(item) : initialValue
			} catch (error) {
				console.error('Error retrieving data from localStorage:', error)
				return initialValue
			}
		} else {
			return initialValue
		}
	}, [key, initialValue, isClient])

	const [value, setValue] = useState(storedValue)

	useEffect(() => {
		if (isClient) {
			try {
				localStorage.setItem(key, JSON.stringify(value))
			} catch (error) {
				console.error('Error saving data to localStorage:', error)
			}
		}
	}, [key, value, isClient])

	return [value, setValue]
}

export default useLocalStorage
