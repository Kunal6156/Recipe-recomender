# 🍳 Bite & Bloom - Your Culinary Guide 🌸
**Bite & Bloom** is a delightful and user-friendly web application designed to help you discover and explore a wide variety of recipes. Whether you're looking for vegetarian delights or non-vegetarian classics, "Bite & Bloom" makes it easy to find your next favorite meal.

-----

## ✨ Features

  * **Recipe Search**: Easily search for specific recipes by name.
  * **Categorized Browse**: Toggle between "Vegetarian" and "Non-Vegetarian" categories to filter recipes.
  * **Dynamic Recipe Display**: Recipes are fetched from an external API and displayed in an attractive, responsive card layout.
  * **Detailed Recipe View (Modal)**: Click on any recipe card to view its full instructions, category, and origin in a clean, pop-up modal.
  * **Animated UI**: Enjoy subtle animations powered by Animate.css for a smoother user experience.
  * **Responsive Design**: The application is designed to look great on various screen sizes, from desktops to mobile devices.
  * **Modern Aesthetics**: A vibrant and appealing design with gradient text effects and subtle shadows.

-----

## 🚀 Technologies Used

  * **HTML5**: For structuring the web content.
  * **CSS3**: For styling and layout, including responsive design, animations, and visual effects.
  * **JavaScript (ES6+)**: For fetching data from APIs, handling user interactions, and dynamically updating the DOM.
  * **TheMealDB API**: The primary data source for fetching recipe information.
      * `https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`
      * `https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`
      * `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      * `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  * **Animate.css**: For adding ready-to-use CSS animations.
  * **Font Awesome**: For culinary-themed icons, like the chef hat in the header.

-----

## 🛠️ Installation & Setup

This is a front-end web application, so there's no complex backend setup required.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Bite-Bloom
    ```
2.  **Open `index.html`:** Simply open the `index.html` file in your web browser. You can do this by navigating to the file in your file explorer and double-clicking it, or by running a simple local web server (e.g., using Python: `python -m http.server`).

-----

## 💡 How to Use

1.  **Browse Recipes**: Upon loading, the page will display **vegetarian recipes** by default.
2.  **Filter by Type**: Use the **dropdown menu** next to the search bar to switch between "Vegetarian" and "Non-Vegetarian" recipes.
3.  **Search for a Recipe**: Type the name of a recipe (e.g., "burger", "pasta") into the **search input** and click the "Search" button.
4.  **View Recipe Details**: Click on the **"Show Recipe" button** on any recipe card to open a modal window displaying detailed instructions, category, and area of origin.
5.  **Close Modal**: Click the "Close" button within the modal or the "x" icon in the top right corner to dismiss the recipe details.

-----

## 📁 Project Structure

```
.
├── index.html      # Main HTML file for the application's structure
├── style.css       # CSS file for all styling and visual presentation
├── script.js       # JavaScript file for dynamic behavior, API calls, and DOM manipulation
├── img1.png        # Logo image used in the header
└── img2.webp       # Another logo or branding image (could be used for favicon/social sharing)
```

-----

## 🤝 Contributing

Contributions are welcome\! If you have suggestions for improvements, new features, or bug fixes, feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

-----

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

## 📞 Contact

For any questions or feedback, please open an issue on the GitHub repository.

-----
