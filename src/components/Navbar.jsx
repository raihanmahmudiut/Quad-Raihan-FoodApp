import IconSearch from "../assets/icons8-search-64.png";
import IconUp from "../assets/icons8-chevron-up-64.png";
import IconUser from "../assets/icons8-user-64.png";
import { useState } from "react";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="navbar top-0 relative z-20 flex flex-row justify-between px-2 border-b-2 border-b-[#e5e5e5] h-20 py-4 items-center">
			<div className="font-bold text-2xl w-1/5 text-left">pti.</div>
			<div className=" w-4/5 md:w-3/5 flex flex-row space-x-1">
				<div className="bg-white w-2/3 flex flex-row items-center p-1 space-x-1 rounded-md">
					<div className="w-1/6">
						<img
							src={IconSearch}
							alt=""
							className="w-6 h-6 font-bold opacity-50"
						/>
					</div>
					<div className="w-5/6">
						<input
							type="text"
							placeholder="Search audiobook"
							className="font-bold text-[#e5e5e5] border-none outline-none w-full"
						/>
					</div>
				</div>

				<div className="relative md:w-2/5">
					<div
						className="bg-white  rounded-md p-2 font-bold flex flex-row space-x-2 items-center justify-between cursor-pointer"
						onClick={handleMenuToggle}
					>
						<span className="ml-2">MENU</span>
						<img
							className={`w-5 h-5 transform ${menuOpen ? "rotate-180" : ""}`}
							src={IconUp}
							alt=""
						/>
					</div>
					{menuOpen && (
						<div className="bg-white absolute py-2 top-full left-0 w-full z-40 mt-2 rounded-xl ">
							{/* Additional menu content here */}
							<ul className="text-left space-y-1">
								<li className="cursor-pointer font-medium text-gray-500 hover:text-[#fe5b3e] hover:bg-gray-200 active:text-[#fe5b3e] px-4 active:bg-gray-200 ">
									Home
								</li>
								<li className="cursor-pointer font-medium text-gray-500 hover:text-[#fe5b3e] hover:bg-gray-200 active:text-[#fe5b3e] px-4 active:bg-gray-200">
									Details
								</li>
								<li className="cursor-pointer font-medium text-gray-500 hover:text-[#fe5b3e] hover:bg-gray-200 active:text-[#fe5b3e] px-4 active:bg-gray-200 ">
									Category
								</li>
								<li className="cursor-pointer font-medium text-gray-500 hover:text-[#fe5b3e] hover:bg-gray-200 active:text-[#fe5b3e] px-4 active:bg-gray-200">
									My Favorites
								</li>
								<li className="cursor-pointer font-medium text-gray-500 hover:text-[#fe5b3e] hover:bg-gray-200 active:text-[#fe5b3e] px-4 active:bg-gray-200 ">
									Profile
								</li>
								<li className="cursor-pointer font-medium text-gray-500 hover:text-[#fe5b3e] hover:bg-gray-200  active:text-[#fe5b3e] px-4 active:bg-gray-200">
									Log in/ Sign up
								</li>
								{/* ... */}
							</ul>
						</div>
					)}
				</div>
			</div>
			<div className="user-icon w-20 hidden md:flex justify-end items-center">
				<div className="rounded-full bg-[#fe5b3e] w-8 h-8 flex items-center justify-center cursor-pointer">
					<img src={IconUser} alt="" className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
