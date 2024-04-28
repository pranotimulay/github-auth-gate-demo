# GitHub authentication using the Passport JS library

This project demonstrates the integration of Passport.js with GitHub's OAuth2 authentication strategy in a Node.js and Express application. It serves as a simple, effective example of implementing secure authentication using GitHub accounts.

## Features

- Secure GitHub authentication using Passport.js.
- Clean and modular Express server setup.
- Uses environment variables for configuration to ensure security.
- Demonstrates basic routing and session management.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a GitHub account.
- You have registered a GitHub OAuth App to obtain a client ID and client secret.
  #### Register a New OAuth App
    * On your GitHub account, navigate to your profile settings by clicking your profile picture in the upper-right corner and selecting Settings.
    * On the left sidebar, scroll down and click on Developer settings.
    * Select OAuth Apps under the Developer settings section.
    * Click on the New OAuth App button.
  #### Fill in the Application Details
  * In the Application name field, provide a name for your application. This name will be shown to users during the authorization process.
  * In the Homepage URL field, enter the URL where your application is hosted (for development, this can be http://localhost:3001 if you are running your server locally).
  * In the Application description field, you can optionally provide a short description of what your app does.
  * For the Authorization callback URL, enter the URL to which GitHub will redirect users after they have authenticated. For local development, this would typically be http://localhost:3001/auth/github/callback.

## Installation

To install this project, follow these steps:

1. Clone this repository
1. Naviagate to the project directory
1. Run `npm install` to install all the required packages

## Configuration
Configure your GitHub client ID and secret to the below environment variables
```shell
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
```
## Run
`npm start`




