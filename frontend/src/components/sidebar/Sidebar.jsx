import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='flex flex-col border-r border-white/10 w-full max-w-xs'>
			<div className='p-4 bg-white/5 backdrop-blur-sm border-b border-white/10'>
				<SearchInput />
			</div>
			<div className='flex-1 overflow-auto'>
				<Conversations />
			</div>
			<div className='p-4 bg-white/5 backdrop-blur-sm border-t border-white/10'>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
