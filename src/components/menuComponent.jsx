import { useEffect, useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import AddMoreForm from "./AddMoreForm";

function MenuComponent() {
	const [menuItems, setMenuItems] = useState([]);
	const [showAddMoreForm, setShowAddMoreForm] = useState(false);
	const [formCategory, setFormCategory] = useState("");

	const popularCarouselRef = useRef();
	const recommendedCarouselRef = useRef();

	useEffect(() => {
		// Fetch data from the API
		fetch(
			"http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
		)
			.then((response) => response.json())
			.then((data) => {
				// Filter items based on IsPopular and IsRecommended flags
				const popularItems = data.Items.filter((item) => item.IsPopular);
				const recommendedItems = data.Items.filter(
					(item) => item.IsRecommended
				);

				// Update state with filtered items
				setMenuItems({
					popular: popularItems,
					recommended: recommendedItems,
				});
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const nextSlide = () => {
		popularCarouselRef.current.scrollLeft +=
			popularCarouselRef.current.offsetWidth;
	};

	const prevSlide = () => {
		popularCarouselRef.current.scrollLeft -=
			popularCarouselRef.current.offsetWidth;
	};

	const nextRecommendedSlide = () => {
		recommendedCarouselRef.current.scrollLeft +=
			recommendedCarouselRef.current.offsetWidth;
	};

	const prevRecommendedSlide = () => {
		recommendedCarouselRef.current.scrollLeft -=
			recommendedCarouselRef.current.offsetWidth;
	};

	const handleAddItem = (newItem) => {
		setMenuItems((prevItems) => {
			const updatedItems = {
				...prevItems,
				[formCategory]: [...prevItems[formCategory], newItem],
			};

			console.log("New item:", newItem);
			console.log("Updated items:", updatedItems);

			return updatedItems;
		});
		setShowAddMoreForm(false);
	};

	const handleAddMoreClick = (category) => {
		setShowAddMoreForm(true);
		setFormCategory(category); // Remember the category selected for the form
	};

	const handleCloseForm = () => {
		setShowAddMoreForm(false);
	};

	const handleOverlayClick = (event) => {
		event.stopPropagation();
		handleCloseForm();
	};

	const handleFormClick = (event) => {
		event.stopPropagation();
	};

	return (
		<div className="menu-component flex flex-col px-4 mt-10 relative">
			{showAddMoreForm && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
					onClick={handleOverlayClick}
				>
					<div onClick={handleFormClick}>
						<AddMoreForm
							category={formCategory}
							onSubmit={handleAddItem}
							handleClose={handleCloseForm}
						/>
					</div>
				</div>
			)}
			<div className="popular-category flex flex-col relative">
				<div className="flex flex-row justify-between mb-4 ">
					<div className="font-bold">Popular</div>
					<div className="flex flex-row items-center">
						<button
							className="text-[#fe5b3e] cursor-pointer mr-1"
							onClick={() => handleAddMoreClick("popular")}
						>
							Add More
						</button>
						<FaAngleLeft onClick={prevSlide} className=" cursor-pointer" />
						<FaAngleRight onClick={nextSlide} className=" cursor-pointer" />
					</div>
				</div>
				<div className="flex overflow-x-auto" ref={popularCarouselRef}>
					{menuItems.popular &&
						menuItems.popular.map((item, index) => (
							<div
								key={item.Id}
								style={{
									flex: `0 0 auto`,

									marginLeft: index > 0 ? `14px` : `0`,
								}}
							>
								<img
									src={item.ImageUrl}
									alt={item.Name}
									className="w-28 md:w-40 h-36 md:h-56 object-cover rounded-md"
								/>
								<p>{item.Name}</p>
							</div>
						))}
				</div>
			</div>
			<div className="recommended flex flex-col mt-10 relative">
				<div className="flex flex-row justify-between mb-4 ">
					<div className="font-bold">Recommended</div>
					<div className="flex flex-row items-center">
						<button
							className="text-[#fe5b3e] cursor-pointer mr-1"
							onClick={() => handleAddMoreClick("recommended")}
						>
							Add More
						</button>
						<FaAngleLeft
							onClick={prevRecommendedSlide}
							className=" cursor-pointer"
						/>
						<FaAngleRight
							onClick={nextRecommendedSlide}
							className=" cursor-pointer"
						/>
					</div>
				</div>
				<div className="flex overflow-x-auto" ref={recommendedCarouselRef}>
					{menuItems.recommended &&
						menuItems.recommended.map((item, index) => (
							<div
								key={item.Id}
								style={{
									flex: `0 0 auto`,

									marginLeft: index > 0 ? `14px` : `0`,
								}}
							>
								<img
									src={item.ImageUrl}
									alt={item.Name}
									className="w-28 md:w-40 h-36 md:h-56  object-cover rounded-md"
								/>
								<p className="mt-2">{item.Name}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default MenuComponent;
