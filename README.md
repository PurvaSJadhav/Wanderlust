🌍 Wanderlust🏡✨

Welcome to Wanderlust! 🚀 This is a full-stack web application where users can list their homes for Airbnb-style rentals, leave reviews, and manage bookings seamlessly! 🔥

## 🚀 Features

🏠 Create, Edit, Delete Listings - List your property with ease! 📝

✨ User Authentication - Sign up, log in, and manage your account 🔑

⭐ Leave Reviews & Ratings - Rate places with star ratings and comments 💬

🗺️ Map Integration - View listing locations using MapTiler 🌍

📸 Image Uploads - Upload images using Cloudinary ☁️

🔒 Secure Authentication - Uses Passport.js for authentication 🛡️

🎨 Beautiful UI - Styled with Bootstrap & CSS for a smooth experience 💅

📂 MVC Architecture - Organized codebase with Models, Views, and Controllers 🏗️

🌍 MongoDB Atlas - Cloud database for storing listings and user data 📊

## 🛠️ Technologies Used

Frontend 🎨

HTML5, Bootstrap 🎀, CSS3, JavaScript (ES6+), EJS (Embedded JavaScript) 📜, Font Awesome 🎨, Google Fonts ✍️

Backend 🏗️

Node.js ⚡, Express.js 🚀, Mongoose (MongoDB ODM) 🛢️, MVC Framework 🏛️, EJS-Mate (Layout Engine) 🖼️, Method-Override (For PUT & DELETE requests) 🔄

Authentication & Security 🔐

Passport.js (User Authentication) 🔑, Cookie-Parser 🍪, Express-Session 🗄️, Connect-Flash (Flash Messages) ⚡, Joi (Data Validation) ✅

Storage & Hosting ☁️

MongoDB Atlas (Cloud Database) 🌎, Connect-Mongo (Session Storage) 🗄️, Cloudinary (Image Hosting) 📸, Multer & Multer-Storage-Cloudinary (File Uploads) 📂, Render (Deployment) 🚀

Map & Location Services 🗺️

MapTiler (For interactive maps) 📍

## 🏗️ Data Models

1️⃣ Listing Model 🏠

Stores details of the places users want to list:

📂 Data for Listings: Stored in the init/data.js file.

2️⃣ Review Model ⭐

Stores user reviews for listings:

3️⃣ User Model 👤

Manages user authentication:

## 📂 MVC Architecture 🏗️

The project follows the Model-View-Controller (MVC) pattern:

Model (M) - Defines database schemas & data relationships 🛢️

View (V) - Handles UI rendering using EJS templates 🎨

Controller (C) - Manages logic, routes, and database interactions 🛠️

## 🎉 Get Started

📥 Clone the Repo: cd wanderlust

📦 Install Dependencies: npm install

🔑 Setup Environment Variables: Create a .env file and add:-

MAP_API_KEY=your_maptiler_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
SESSION_SECRET=your_secret_key
MONGO_URI=your_mongodb_atlas_uri

📂 initialize the data: 

cd init

node index.js

## 🚀 Run the App

nodemon app.js

📍 Visit http://localhost:3000/ to explore Wanderlust!

## About

💙 Built with passion for travel & tech! ✈️🚀

⭐ If you like this project, consider giving it a star! 🌟

Author - Purva S. Jadhav