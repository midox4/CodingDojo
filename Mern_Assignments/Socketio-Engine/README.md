# <span style="font-size: 2em;">

Connect Express to Chat Engine!
This simple repo shows how to easily add chat functionality into an Express project with Chat Engine.</span>



Setup Steps
Make your express server support chat - in 3 steps:

1 - Setup a Chat Engine server
Go to Chat Engine to setup your own chat server.

Click "New Project" and follow the steps
Your Project ID and Private Key will be required for step 2
2 - Connect .env to Chat Engine
We will connect to your Chat Engine server with environment varibles.

This allows you to connect to different chat-servers in local vs staging vs production.

Replace the UUIDs below with your own. In .env write:

CHAT_ENGINE_PROJECT_ID=
CHAT_ENGINE_PRIVATE_KEY=
3 - Install & Start
Run the following two lines of code in server-express/.

npm install
npm run start
Done! Your Express server is on localhost:3001 and connected to Chat Engine!

All new /signup users are on Chat Engine, and their credentiuals are found upon /login.


