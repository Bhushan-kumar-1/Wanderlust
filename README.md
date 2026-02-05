🏡 Airbnb – MERN Stack Web Application
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

🔗 GitHub Repository: [https://github.com/your-username/airbnb-clone](https://github.com/Bhushan-kumar-1/Airbnb)


👨‍💻 Author

Bhushan Kumar
🔗 GitHub: https://github.com/Bhushan-kumar-1

🔗 LinkedIn: https://www.linkedin.com/in/bhushan-kumar-77072b227

📸 Screenshots


![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/13d99c7a326bf7cd94899660dd11b8173cb1e478/Screenshot%202026-01-13%20124540.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/dcd717f3080bee7ef240deb3cae37972458120ec/Screenshot%202026-01-13%20124610.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/c8ea9a1c1c4efb0d3e42e3a66379be1d8295d71c/Screenshot%202026-01-13%20124639.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/82a01d405a93867055796728e30b88aff69b0de8/Screenshot%202026-01-13%20124720.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/0c71ad1dd02841326064a42109377a94422649f3/Screenshot%202026-01-13%20124846.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/2ba2a20545d5fb14ee882839d70c3e5852084543/Screenshot%202026-01-13%20124950.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/42f6af9f6f282877f05c59f0b63a2d3ddf39ba05/Screenshot%202026-01-13%20125026.png)
![image alt](https://github.com/Bhushan-kumar-1/Airbnb/blob/c0c34207ae5283d4e68048515f2a068174fafa89/Screenshot%202026-01-13%20125107.png)
