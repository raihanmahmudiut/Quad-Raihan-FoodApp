import Image1 from "../assets/Image1.jpg";

function FoodBanner() {
	return (
		<div className="foodbanner z-10 flex flex-col md:flex-row space-y-20 md:space-y-0 relative px-2 mt-10 items-center md:bg-[#f99f1c] md:text-white rounded-xl">
			<div className="flex flex-col space-y-4 z-10 md:w-2/3 md:ml-20 md:justify-start">
				<div className="text-3xl font-semibold md:text-left md:pr-10">
					Deliver Food To Your Door Step|
				</div>
				<div className="text-slate-600 md:text-gray-200 mt-4 md:text-left">
					Authentic Food|, Quick Service, Fast Delivery
				</div>
			</div>

			<div className="bg-[#fd9460] h-[10.5rem] w-full rounded-2xl md:hidden"></div>

			<div className=" absolute bottom-0 md:hidden">
				<img src={Image1} className="" />
			</div>
			<div className="hidden md:block mr-6">
				<img src={Image1} className="" />
			</div>
		</div>
	);
}

export default FoodBanner;
