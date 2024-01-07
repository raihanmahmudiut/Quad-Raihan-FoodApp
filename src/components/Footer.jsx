import { FaArrowRightLong } from "react-icons/fa6";
import IconGoogleWhite from "../assets/icons8-google-64.png";
import IconGoogleOrange from "../assets/icons8-google-30.png";
import IconTwitterWhite from "../assets/icons8-twitter-64.png";
import IconTwitterOrange from "../assets/icons8-twitter-30.png";
import IconInstaWhite from "../assets/icons8-instagram-64.png";
import IconInstaOrange from "../assets/icons8-instagram-30.png";

import Image2 from "../assets/Image2.png";

export default function Footer() {
	return (
		<div className="footer bottom-0 bg-[#f99f1c] rounded-lg my-20 text-center items-center space-y-8 md:flex md:flex-row ">
			<div className="md:w-2/3 md:space-y-16 md:ml-20">
				<div className="subscribe-container flex justify-center md:justify-start mt-12 md:mt-0">
					<div className="subscribe flex flex-row justify-between bg-white px-6 py-2 md:px-3 mt-4 w-5/6 rounded-md md:rounded-2xl ">
						<div className="centered text-gray-400 text-sm flex justify-center items-center px-6">
							Enter your email
						</div>
						<div className="flex flex-row items-center justify-center text-[#fe5b3e] md:text-white md:px-8 md:py-2 md:bg-[#fe5b3e] md:rounded-xl font-semibold space-x-2">
							<h2>Subscribe</h2> <FaArrowRightLong />
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:px-0 md:items-end mt-6 md:mt-0">
					<div className="media-icons flex justify-center space-x-2 order-none md:order-2 md:mr-16">
						<div className="bg-[#fe5b3e] md:bg-[#eeeff0] rounded-full w-12 h-12 flex items-center justify-center">
							<img src={IconGoogleWhite} alt="" className="w-6 h-6 md:hidden" />
							<img
								src={IconGoogleOrange}
								alt=""
								className="w-6 h-6 hidden md:block"
							/>
						</div>
						<div className="bg-[#fe5b3e] md:bg-[#eeeff0] rounded-full w-12 h-12 flex items-center justify-center">
							<img
								src={IconTwitterWhite}
								alt=""
								className="w-6 h-6 md:hidden"
							/>
							<img
								src={IconTwitterOrange}
								alt=""
								className="w-6 h-6 hidden md:block"
							/>
						</div>
						<div className="bg-[#fe5b3e] md:bg-[#eeeff0] rounded-full w-12 h-12 flex items-center justify-center">
							<img src={IconInstaWhite} alt="" className="w-6 h-6 md:hidden" />
							<img
								src={IconInstaOrange}
								alt=""
								className="w-6 h-6 hidden md:block"
							/>
						</div>
					</div>
					<div className="order-none md:order-1 md:text-left md:items-center pb-20 md:pb-0 space-y-3">
						<div className="footer-logo font-extrabold text-3xl">
							pti<span className="text-[#fe5b3e]">.</span>
						</div>
						<div
							className="copyright font-bold text-base
            "
						>
							Copyright©Tripp. All rights reserved
						</div>
					</div>
				</div>
			</div>
			<div className="hidden md:flex md:justify-end">
				<img src={Image2} alt="" className="h-52" />
			</div>
		</div>
	);
}
