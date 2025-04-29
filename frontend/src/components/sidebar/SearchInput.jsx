import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<div className='relative flex-1'>
				<input
					type='text'
					placeholder='Search users...'
					className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-white placeholder-gray-400 outline-none transition-all pr-12'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button 
					type='submit' 
					className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white/50 hover:text-white bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-all duration-200'
				>
					<IoSearchSharp className='w-5 h-5' />
				</button>
			</div>
		</form>
	);
};
export default SearchInput;

// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;
