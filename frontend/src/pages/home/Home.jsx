import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-[100vh] items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-600'>
			<div className='flex w-full max-w-6xl h-[85vh] rounded-xl overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl border border-gray-200/20'>
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
