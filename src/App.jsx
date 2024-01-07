import "./App.css";
import FoodBanner from "./components/FoodBanner";
import MenuComponent from "./components/menuComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
	return (
		<div className="container min-h-screen flex flex-col justify-between bg-[#eeeff0] md:px-40 ">
			<div className="md:mx-40 relative">
				<Navbar />
				<FoodBanner />
				<MenuComponent />
			</div>

			<Footer />
		</div>
	);
}

export default App;
