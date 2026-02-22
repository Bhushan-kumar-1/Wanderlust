🏡  Wanderlust – MERN Stack Web Application
 Project is LIVE on this LINK: https://wanderlust1-o916.onrender.com

📌 Project Overview

The Airbnb Clone is a full-stack web application built using the MERN stack that allows users to list, explore, and book rental properties. The platform supports property owners and guests with secure authentication, property management, reviews, and a responsive user interface similar to Airbnb.

This project focuses on real-world backend architecture, authentication, database relationships, and dynamic UI rendering.

## Features

### Admin Inventory
- **GET** `/admin/inventory/rooms/{roomId}` - Retrieve inventory of a room
- **PATCH** `/admin/inventory/rooms/{roomId}` - Update inventory for a room
- **PUT** `/admin/hotels/{hotelId}/rooms/{roomId}` - Update a room
- 
### Hotel Browse
- **GET** `/hotels/{hotelId}/info` - Get hotel details
- **GET** `/hotels/search` - Search for hotels

### Hotel Management
- **DELETE** `/admin/hotels/{hotelId}` - Delete a hotel
- **GET** `/admin/hotels/{hotelId}` - Get hotel by ID
- **GET** `/admin/hotels` - Get all admin hotels
- **PATCH** `/admin/hotels/{hotelId}/activate` - Activate a hotel
- **POST** `/admin/hotels` - Create a hotel
- **PUT** `/admin/hotels/{hotelId}` - Update hotel details

### Room Admin Management
- **DELETE** `/admin/hotels/{hotelId}/rooms/{roomId}` - Delete a room
- **GET** `/admin/hotels/{hotelId}/rooms/{roomId}` - Get room details
- **GET** `/admin/hotels/{hotelId}/rooms` - Retrieve all rooms
- **POST** `/admin/hotels/{hotelId}/rooms` - Create a room
- **PUT** `/admin/hotels/{hotelId}/rooms/{roomId}` - Update a room

### User Authentication
- **POST** `/auth/signup` - User signup
- **POST** `/auth/refresh` - Refresh access token
- **POST** `/auth/login` - User login

### User Profile
- **DELETE** `/users/guests/{guestId}` - Remove a guest
- **GET** `/users/guests` - Get my guests
- **GET** `/users/profile` - Get my profile
- **GET** `/users/myBookings` - Get my bookings
- **PATCH** `/users/profile` - Update my profile
- **POST** `/users/guests` - Add a guest
- **PUT** `/users/guests/{guestId}` - Update a guest

🛠️ Tech Stack

Frontend:

React.js

HTML5, CSS3

Bootstrap / Tailwind CSS

Backend:

Node.js

Express.js

Database:

MongoDB

Mongoose

Authentication:
JWT (JSON Web Token)

bcrypt for password hashing
Express Validator
Node.js & npm installed

MongoDB installed and running

🔽 Clone the Repository
git clone https://github.com/Bhushan-kumar-1/Airbnb
cd airbnb-clone

http://localhost:8080

Application will run on:

🌐 Live Demo

🔗 LIVE LINK: https://wanderlust1-o916.onrender.com



👨‍💻 Author

Bhushan Kumar
🔗 GitHub: https://github.com/Bhushan-kumar-1

🔗 LinkedIn: https://www.linkedin.com/in/bhushan-kumar-77072b227

📸 Screenshots
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/a608e4b6c913042ff675c5084d395a822a261bbc/Screenshot%202026-02-22%20115929.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/9c4743622881c4f6f85ded5dc090fdb54794e212/Screenshot%202026-02-22%20120001.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/dd0aaae91be91b0486212ab4930cd75c1882005f/Screenshot%202026-02-22%20120044.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/c815b550a3d7a7f5479cb6403523a004f359ec84/Screenshot%202026-02-22%20120114.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/2140d7c4fef67e92cfcb4a911c18d8a431da9a2e/Screenshot%202026-02-22%20120147.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/91f4921118482bb7f8f1e0d07d8a789a48c553c3/Screenshot%202026-02-22%20120217.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/381453ca77e0ab780288f38c23962cafef7902eb/Screenshot%202026-02-22%20121336.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/dec381314e1a403c513d7bc6c055a8a505caee44/Screenshot%202026-02-22%20121514.png)
![image alt](https://github.com/Bhushan-kumar-1/Wanderlust/blob/ebc665cb61c07bde33d3c3129d0ecd1f6f00458c/Screenshot%202026-02-22%20121603.png)

