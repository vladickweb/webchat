// Custom hook for managing chat-related state and interactions.

import { useState, useEffect, useRef, useCallback } from 'react'
import {
	addDoc,
	collection,
	onSnapshot,
	serverTimestamp
} from 'firebase/firestore'
import useLocalStorage from './useLocalStorage'
import { Message } from '../types/message'
import { db } from '../../lib/firebase'
import { useRouter } from 'next/navigation'

export const useChat = () => {
	const router = useRouter()
	const [messages, setMessages] = useState<Message[]>([])
	const [newMessage, setNewMessage] = useState('')
	const [username] = useLocalStorage('username', '')

	if (!username) {
		router.push('/')
	}

	const messagesContainerRef = useRef(null)

	useEffect(() => {
		// Subscribe to real-time updates from the 'messages' collection in Firestore.
		const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
			const messagesData = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}))

			// Update the local 'messages' state with the latest data.
			setMessages(messagesData as Message[])
		})

		return () => {
			unsubscribe()
		}
	}, [])

	const handleSendMessage = useCallback(async () => {
		if (newMessage.trim() !== '') {
			// Asynchronously adds a new message to the Firestore 'messages' collection.
			await addDoc(collection(db, 'messages'), {
				username,
				text: newMessage,
				timestamp: serverTimestamp()
			})
			setNewMessage('')
		}
	}, [newMessage, username])

	return {
		messages,
		newMessage,
		setNewMessage,
		messagesContainerRef,
		handleSendMessage
	}
}
