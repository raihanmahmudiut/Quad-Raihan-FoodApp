# Quad Food App

## Overview
This web application, built using Vite, React, Tailwind CSS, and Formik, enables users to explore a menu with two categories: "Popular" and "Recommended." The interface includes a menu drawer for easy navigation and buttons to add items to the existing menu.

### Features
- **Menu Categories:** Divided into "Popular" and "Recommended" sections.
- **Add More Functionality:** Each section includes an "Add more" button that opens a Formik form.
- **Form Inputs:** The form allows users to input the food item name, price, unique ID, and image URL.
- **Dynamic Update:** Depending on the section selected, the logic adds the item to that specific category and updates the app's data retrieved from the API.
- **Footer Sections:** Includes an email subscription area and copyright information.

## Screenshots
### Mobile View
![Mobile View](https://github.com/raihanmahmudiut/Quad-Raihan-FoodApp/blob/master/src/assets/Mobile%20Version.png)

### Desktop View
![Desktop View](https://github.com/raihanmahmudiut/Quad-Raihan-FoodApp/blob/master/src/assets/Desktop%20Version.png)

## Setup
1. Clone the repository: `git clone https://github.com/raihanmahmudiut/Quad-Raihan-FoodApp.git`
2. Open the project directory.
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Usage
- Upon starting the development server, navigate to `localhost:3000` (or the specified port).
- Users can interact with the menu by browsing or searching for items.
- Clicking on the menu drawer reveals navigation options.
- To add new items:
    - Click on the respective "Add more" button in the "Popular" or "Recommended" section.
    - Fill in the required details in the Formik form that pops up and submit.

## Technologies Used
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Formik](https://formik.org/)

## Contributing
Contributions are welcome! If you wish to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make modifications and commit changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any inquiries or feedback, please contact [Raihan Mahmud](mailto:raihanmahmudiut@gmail.com).
