# Demo website of the WOMAZING store.

This repository contains the code for a React application developed to create a user interface for a store. The store encompasses numerous features that provide convenience and functionality for users.

#### Please note that data loading may take a little time as json-server and json-server-auth are being used.

## Table of Contents

- [Live Demo](#live-demo)
- [Screenshots](#Screenshots)
- [Description](#description)
- [The main features of the store include](#main-features)
- [Backend](#backend)
- [Frontend](#frontend)
- [UI Requirements](#ui-requirements)
- [Instructions](#instructions)
- [Contact](#contact)

## Live Demo

Check out the live project on Netlify: https://precious-seahorse-946c07.netlify.app/

🌱 Please note that there might be issues with loading products from server on the live demo.

## Screenshots
![precious-seahorse-946c07 netlify app_](https://github.com/NazarLyubchinsky/womazing/assets/120901032/b24d0e04-65b3-4274-8d51-01311d140ed2)
-------
![precious-seahorse-946c07 netlify app_ (1)](https://github.com/NazarLyubchinsky/womazing/assets/120901032/741b56f6-bed1-4fb3-a372-95c5b7a25b55)




## Description

 The application is designed with user-friendly features and a responsive layout.

## main features

1. One of the key functions that I have implemented is user and administrator authentication with their respective privileges:
    - User Privileges:

* Adding products to the shopping cart and placing orders.
* Viewing their own profile and the ability to update personal information and password.
* Viewing order history.
  
  - Administrator Privileges:

* Adding products to the store.
* Setting discounts on products (if not already set).
* Admin dashboard:
    Filtering and searching for products.
    Uploading a table with data.
    Sorting, editing, deleting, and adding all products.
    Managing all registered users, including editing, deleting, and adding them.
    Checking orders and sending them to customers' addresses.

   - Registration involves the following fields:

* Email
* Username
* Phone number
* Password
* Password confirmation
* After successful registration, you will receive a coupon that can be used as a discount.

  - Login is done using:

* Email
* Password

2. After logging in, you will be greeted with a homepage featuring four blocks. The first two blocks will take you to the store catalog, and the last block allows you to learn more about our brand.

3. In the "Store" section, you can browse products, but to add them to your cart, you need to register or log in. Product filtering is available by brand, price range, and discounts.

4. On the product page, you can choose the size and color of the product, add it to your cart, and view related products.

5. The "About the Brand" page provides a description of the brand, and the "Contact" page contains a Google map, our contact information, and a feedback form.

6. The "Cart" page contains a list of items you've added, and it remains active until you place an order or remove items. Here you can apply a discount coupon, clear individual items or the entire cart, and proceed to checkout.

7. On the "Checkout" page, you need to enter customer information, the recipient's address, and review your order.
  
9. A multilingual website  Eng, UA 

## Backend

Json-server, Json-server-auth

## Frontend
Library:
- antd
- axios
- google-map-react
- i18next
- json-server
- json-server-auth
- react-admin
- ra-data-json-server
- react-lazy-load-image-component
- swiper
- react-hook-form
- react-input-mask
  
## UI Requirements

The application follows an eye-friendly design and is responsive.

## Instructions

To run the project on your local machine:

1. Clone this repository: `git clone [repo-link]`
2. Navigate to the project directory: `cd [project-folder]`
3. Install dependencies: `npm install`
4. Run the Vite development server: `npm run start`
5. Start the front-end and back-end development servers with "npm run dev."
6. Access the application in your browser at `http://localhost:3000` or link provided by vite

## Contact

For any inquiries or feedback, feel free to contact:

- Nazar Lyubchinskyi
- GitHub: (https://github.com/NazarLyubchinsky)
- linkedin: (https://www.linkedin.com/in/nazar-lyubchynskyi-37a89026b/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-2CA5E0?style=for-the-badge&logo=linkedIn&logoColor=white)](https://www.linkedin.com/in/nazar-lyubchynskyi-37a89026b/) 
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/VBShadow) 
[![portfolio](https://img.shields.io/badge/Portfolio-2CA5E0?style=for-the-badge&logoColor=white)](https://www.weblancer.net/users/Lyubch/#portfolio) 


Enjoy exploring the React application and its features!

