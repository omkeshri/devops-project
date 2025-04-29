import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-indigo-600" : "bg-gray-700";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName} my-4`}>
			<div className='chat-image avatar'>
				<div className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/20'>
					<img 
						alt='User avatar'
						src={profilePic}
						className='object-cover w-full h-full'
					/>
				</div>
			</div>
			<div 
				className={`chat-bubble ${bubbleBgColor} ${shakeClass} text-white shadow-lg
					${fromMe ? 'bg-opacity-90' : 'bg-opacity-80'}
					backdrop-blur-sm pb-2 max-w-xs sm:max-w-md break-words`}
			>
				{message.message}
			</div>
			<div className='chat-footer opacity-70 text-xs flex gap-1 items-center text-gray-300'>
				{formattedTime}
			</div>
		</div>
	);
};
export default Message;
