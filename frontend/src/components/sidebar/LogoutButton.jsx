import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<button 
			onClick={logout} 
			disabled={loading}
			className='flex items-center gap-2 text-gray-300 hover:text-white py-2 px-4 w-full hover:bg-white/10 rounded-lg transition-all duration-300'
		>
			{loading ? (
				<div className='h-5 w-5 border-t-2 border-white/80 rounded-full animate-spin' />
			) : (
				<>
					<BiLogOut className='w-5 h-5' />
					<span>Logout</span>
				</>
			)}
		</button>
	);
};
export default LogoutButton;
