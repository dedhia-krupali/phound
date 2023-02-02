1. Install Prerequisites
Node.js is a back-end runtime environment that executes JavaScript code outside a web browser, and npm is its default package manager. Both must be installed locally in order to run this project.

Node.js

The recommended way of installing Node.js is with a Node version manager. Different operating systems use different Node version managers:

Node version managers for OSX and Linux:

nvm - installation instructions
n - installation instructions
Node version managers for Windows:

nodist - installation instructions
nvm-windows - installation instructions
Choose an appropriate Node version manager for your operating system and follow the installation instructions linked above to install both the version manager and Node.js.

To confirm that Node.js has been installed successfully, run the following command to check the installed version:

node -v
npm

Once Node.js is installed, download and install the latest version of npm by running the following command from the command line:

npm install npm@latest -g
To confirm that npm has been installed successfully, run the following command to check the installed version:

npm -v


2. Acquire an API Key
All of the images this site displays are retrieved from Pexels, and are requested and received via the Pexels API. An API key is required in order to interact with the Pexels API. A Pexels API Key is NOT included in this repository -- you must get your own (free) API key from Pexels.

Follow these steps to register with Pexels and obtain a Pexels API Key:

Create a free Pexels account at https://www.pexels.com/onboarding
Click the "I want to download" button
Enter your personal information, then click the "Create New Account" button
Complete your account setup by opening the email sent to you by Pexels and clicking the "Confirm email" button
Go to https://www.pexels.com/api/ and click the "Your API Key" button
Fill out the form, agree to the Terms of Service, and click the "Generate API Key" button
Copy the API key and save it somewhere safe -- you will need it in the next section
The API key should be a 56 character string of numbers and lowercase letters.

example: sample0api0key123456789abcdefghijklmnopqrstuvwxyz0000000

If you ever lose or misplace your API key, you can retrieve it by logging in to your Pexels account.

3. Add the API Key to the Project
In development mode, the Pexels API Key is stored in a .env file and saved as an environment variable. This .env file should NOT be committed to GitHub, and is not a secure way to store API keys in a production environment.

Create a new file named .env,

touch .env
Add your Pexels API Key to the .env file as an environmental variable named REACT_APP_PEXEL_API_KEY:

echo "REACT_APP_PEXEL_API_KEY=sample0api0key123456789abcdefghijklmnopqrstuvwxyz0000000" > .env
Once you are done, your .env file should look like this:

// phound/.env

REACT_APP_PEXEL_API_KEY = sample0api0key123456789abcdefghijklmnopqrstuvwxyz0000000;

4. Run the Project
Run frontend: npm run start:frontend 
Run backend: nom run start:backend



