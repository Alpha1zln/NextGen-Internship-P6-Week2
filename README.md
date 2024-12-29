## Week 2 changes ***

1-
Index.js file changed - 
mongodb connected - 
few user details registered  - added in mongodb compass
connected with server , after making changes in index.js of server folder

2-
Improvement in Tour Booking Logic:
Validate the tour availability (check if slots are open for selected dates).
Return user-friendly error messages if a booking fails.
File needed:
Booking.jsx (for managing booking logic).


3-
combined frontend and backend code - 
created folder client and server.
website is running .
mongodb is connected too.
few err encountered, working on them.

    To combine your frontend and backend into a single project while keeping them organized, follow these steps:
    
    1. Create a New Project Folder
    Create a new root folder for your combined project, e.g., fullstack-project.
    
    2. Move Existing Code
    Move your frontend folder into the new root folder, renaming it as client.
    Move your backend folder into the same root folder, renaming it as server.
    Your project structure should now look like this:
    
    scss
    Copy code
    fullstack-project/
      ├── client/    (Frontend)
      ├── server/    (Backend)
    
    3. Create a New Root package.json
    In the root folder (fullstack-project), initialize a new package.json file by running:
    
    bash
    Copy code
    npm init -y
    
    4. Install concurrently and nodemon
    These tools help run both frontend and backend servers together.
    
    bash
    Copy code
    npm install concurrently nodemon --save-dev
    
    5. Update Scripts in Root package.json
    Add scripts in the root package.json to manage both client and server:
    
    json
    Copy code
    {
      "scripts": {
        "start": "concurrently \"npm start --prefix client\" \"npm start --prefix server\"",
        "start-client": "npm start --prefix client",
        "start-server": "npm start --prefix server",
        "build": "npm run build --prefix client"
      }
    }
    start: Runs both frontend and backend together.
    start-client: Runs only the frontend.
    start-server: Runs only the backend.
    build: Builds the frontend for production.
    
    6. Configure Frontend to Proxy Requests to Backend
    In the client/package.json, add a proxy to route API requests to the backend:
    
    json
    Copy code
    "proxy": "http://localhost:5000"
    Replace 5000 with your backend server's port.
    
    7. Install Dependencies for Each Folder
    Run the following commands from the root to install dependencies for both frontend and backend:
    
    bash
    Copy code
    npm install --prefix client
    npm install --prefix server
    
    8. Run the Application
    Run both frontend and backend together using:
    
    bash
    Copy code
    npm start
    
    9. Optional: Deploy
    For deployment, build the frontend using:
    
    bash
    Copy code
    npm run build
    Then, configure the backend to serve the frontend's static files by adding this in server/index.js (or your main backend file):
    
    javascript
    Copy code
    import path from 'path';
    import express from 'express';
    
    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    // Catch-all to serve the frontend's index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });

    
    *****************
    // some modification reqd here -  
    4-
    Changes in Backend Files: 
    Booking Controller (bookingController.js):
    Implement a POST route to handle booking data from the frontend.
    Validate input data (e.g., bookAt, guestSize).
    Check if slots for the tour are available for the selected date.
    Save booking data to the database.
    Send a response to confirm success or failure.



    ***********************************************************************************
