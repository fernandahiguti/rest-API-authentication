# REST API Authentication

This repository contains a simple REST API built with Node.js, Express.js, TypeScript, and MongoDB. The API allows you to perform basic CRUD (Create, Read, Update, Delete) operations for user data. It also includes middleware authentication to ensure that only the owner of a user can delete their account. Additionally, it supports cookie-based authentication for enhanced security.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (ensure MongoDB is running locally or provide a connection URI)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/rest-API-authentication.git
   cd rest-API-authentication
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and configure the following environment variables:

   ```env
   MONGO_URL=YOUR_MONGO_URI # MongoDB connection URI
   SECRET=YOUR_SECRET_STRING # Your chosen secret for Token (must be a string)
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The REST API server should now be running locally on the specified port (8080).

## Usage

You can use this API to perform CRUD operations on user data. Middleware authentication ensures that only the owner of a user account can delete it. Cookie-based authentication adds an extra layer of security to the authentication process.

For more details on the available endpoints and their usage, please refer to the source code.

## Contributing

Contributions to this project are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License. 