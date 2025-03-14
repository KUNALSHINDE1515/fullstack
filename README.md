How to Set Up a Full-Stack Project
Setting up a full-stack project requires careful planning and execution. Below are the steps to create a full-stack project efficiently.

Step 1: Initialize the Project
Run the command:

npm init
Enter the required details:

Package name

Version

Description

Entry point (default: index.js, but can be changed)

Test command

Git repository

Keywords

Author

License (default: ISC)

Once the package.json file is created, specify the type:

"type": "commonjs" or "module"
This helps define how JavaScript modules work in the project.

Step 2: Configure Environment Variables
If your project requires sensitive data (like API keys, database URLs), create a .env file.

Store environment variables safely inside this file.

Step 3: Install Express
To set up the server, install Express:

npm install express
Check installed packages in package.json under dependencies.

Step 4: Install Nodemon
To monitor changes and restart the server automatically:

npm i nodemon
Two types of dependencies exist:

dependencies - required for production

devDependencies - used during development

Add a script in package.json:

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Run the script:

npm run dev
Step 5: Handle Errors and CORS Issues
Routes should always start with /

Install dotenv to manage environment variables:

npm install dotenv
Use dotenv in your code:

import dotenv from 'dotenv';
dotenv.config();
Install CORS to handle cross-origin issues:

npm install cors
Step 6: Set Up MongoDB
Install Mongoose:

npm install mongoose
Connect to MongoDB:

Create a cluster in MongoDB Atlas.

Enable IP whitelisting.

Use a database connection string with ID & password.

Secure credentials using dotenv:

dotenv.config();
Export the database connection.

Step 7: Authentication System
User Schema
Define a user schema with fields like:

Name

Email

Password (hashed)

Role (user/admin)

isVerified

Password reset token & expiry

CreatedAt

Password Reset Flow
User enters email.

Backend generates a reset token and saves it in the database.

User receives an email with the reset link.

If the token is valid, the user can reset the password.

User Verification
User signs up.

Backend sends an OTP to the email.

User clicks on the verification link.

Backend verifies and updates the database.

Step 8: Create Models and Routes
Define a Mongoose Model
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
export default User;
Create Controllers and Routes
Controllers handle logic separately from routes.

Example controller:

const registerUser = async (req, res) => {
  res.send("User Registered");
};
export { registerUser };
Define routes:

import express from 'express';
const router = express.Router();

router.post('/register', registerUser);
export default router;
Summary
Install and set up Express & Mongoose.

Use CORS and dotenv for security.

Implement authentication with JWT.

Follow best practices by separating models, controllers, and routes.

By following these steps, you can successfully set up a full-stack project and start building your application!

