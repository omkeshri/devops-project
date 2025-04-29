import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex-1 flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-white/10 px-4 py-4 mb-2 backdrop-blur-md'>
						<div className='flex items-center gap-2'>
							<div className='w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold'>
								{selectedConversation.fullName[0]}
							</div>
							<div className='flex flex-col'>
								<span className='text-gray-100 font-medium'>{selectedConversation.fullName}</span>
								<span className='text-gray-300 text-sm'>Online</span>
							</div>
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-gradient-to-b from-gray-900/50 to-gray-800/50'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4'>
				<div className='flex flex-col items-center gap-2'>
					<div className='w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-4xl font-bold'>
						{authUser.fullName[0]}
					</div>
					<p className='text-2xl'>Welcome, {authUser.fullName} 👋</p>
				</div>
				<p className='text-gray-400'>Select a chat to start messaging</p>
				<TiMessages className='text-5xl md:text-7xl text-indigo-500 mt-4 animate-bounce' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
