import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4 py-4 bg-white/5 backdrop-blur-lg' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='w-full px-4 py-3 bg-white/10 rounded-lg border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-white placeholder-gray-400 outline-none transition-all'
					placeholder='Type your message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button 
					type='submit' 
					className='absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-all duration-200 disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<div className='h-5 w-5 border-t-2 border-white/80 rounded-full animate-spin' />
					) : (
						<BsSend className='text-lg' />
					)}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;

// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;
