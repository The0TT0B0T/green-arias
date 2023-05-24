Green Aria's Landscaping and Snow Removal
This repository contains the code for a website that offers landscaping and snow removal services. The website allows users to view available services, add items to a cart, and provide customer information for a free estimate.

Installation
To run the website locally, follow these steps:

Clone the repository:

git clone https://github.com/your-username/green-arias-landscaping.git
Navigate to the project's directory:

cd green-arias-landscaping
Open the index.html file in a web browser.

Usage
The website displays a list of available services/products. Users can add items to the cart by clicking the "Add to Cart" button. The cart can be accessed by clicking the shopping cart icon in the navbar. In the cart, users can view the selected items, adjust quantities, and remove items. Users can also provide their contact information for a free estimate using the customer information form in the cart.

Code Overview
The code is organized into several JavaScript classes:

Products: Handles fetching the list of available products from a JSON file (products.json).
UI: Handles the UI interactions, such as displaying products, updating the cart, and handling user input.
ShoppingCart: Manages the cart functionality, including adding and removing items, clearing the cart, and updating the total.
Storage: Handles storing and retrieving data from local storage.
The index.html file contains the HTML structure of the website, and the styles.css file contains the custom styling.

Dependencies
The website does not have any external dependencies and does not require any additional installations.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
