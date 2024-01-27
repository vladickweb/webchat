'use client'

import React from 'react'
import { useChat } from '../../hooks/useChat'

const ChatUI = () => {
	const {
		messages,
		newMessage,
		setNewMessage,
		messagesContainerRef,
		handleSendMessage
	} = useChat()

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<div className='bg-white p-6 rounded shadow-md w-96 h-96 relative flex flex-col'>
				<div
					className='mb-4 flex-grow overflow-y-auto'
					ref={messagesContainerRef}
				>
					{messages
						.sort((a, b) => a.timestamp?.seconds - b.timestamp?.seconds)
						.map((message) => (
							<div key={message.id} className='mb-2'>
								<strong>{message.username}:</strong> {message.text}
							</div>
						))}
				</div>
				<div className='flex items-center'>
					<input
						type='text'
						placeholder='Type your message'
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						className='border p-2 flex-grow'
					/>
					<button
						onClick={handleSendMessage}
						className='bg-blue-500 text-white p-2 ml-2 rounded'
					>
						Send
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatUI
