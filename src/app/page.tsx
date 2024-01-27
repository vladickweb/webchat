'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'

const Home = () => {
	const [username, setUsername] = useState('')
	const [localUsername, setLocalUsername] = useLocalStorage('username', '')
	const router = useRouter()

	useEffect(() => {
		if (localUsername) {
			router.push('/chat')
		}
	}, [localUsername, router])

	const handleStartChat = useCallback(() => {
		setLocalUsername(username)
		router.push('/chat')
	}, [router, setLocalUsername, username])

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<div className='bg-white p-6 rounded shadow-md'>
				<h1 className='text-2xl font-bold mb-4'>Welcome to the Chat App</h1>
				<input
					type='text'
					placeholder='Enter your username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='border p-2 w-full mb-4'
				/>
				<button
					onClick={handleStartChat}
					className='bg-blue-500 text-white p-2 rounded'
				>
					Start Chat
				</button>
			</div>
		</div>
	)
}

export default Home
