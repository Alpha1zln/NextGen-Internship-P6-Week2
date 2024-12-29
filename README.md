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


4-
Use .gitignore:
To Avoid Adding Other Files or Folders

Create a .gitignore file in your repository root to ignore unwanted files or folders.

Example:
gitignore
Copy code
other_folder/
*.log

Stage Changes Carefully:

Use git add with the specific path to prevent staging unintended files:
bash
Copy code
git add fullstack_proj/
Check Before Committing:

Always run git status to review what you are committing.
    
    


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


    **********************************************************************
    
    To add all files in the folder fullstack_proj to your Git staging area, follow these steps:
    
    Command to Add All Files in fullstack_proj
    bash
    Copy code
    git add fullstack_proj/
    This will add all files and subdirectories within the fullstack_proj folder to the staging area.

     **********************************************************************

        To change dir in git bash - 
        Command
        Use double quotes (") around the path:
        bash
        Copy code
        cd "C:\Users\EKLVY\Desktop\edunet internship\dec web dev internsp EY\mix week1_2"
        
        Alternatively, escape each space with a backslash (\):
        bash
        Copy code
        cd C:\Users\EKLVY\Desktop\edunet\ internship\fullstackProject

      **********************************************************************
        How to fork repo , make changes in git bash and then push to github repo back - 

                1- FORK REPO :: 
                    STEPS : 
                    A- FORK REPO INTO YOUR GITHUB FROM MAIN. B- Copy the http link for cloning data to PC.
                    
                    Detail here - 
                    https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui
                    
                
                    B- MAKE ITS CLONE INTO PC.
                    Open Git Bash.
                    Change the current working directory [cwd] to the location where you want the cloned directory.
                    Type git clone, and then paste the URL you copied earlier.
                    CODE FOR CLONE -
                    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY



                    *** 
                    It is good approach, to create BRANCH of your main, so that both are saved separately and later changes can be matched or if branch code fails, at least main code is     
                    remain unaltered.
    
                    Cmd for creating branch in git bash ->
                        git checkout -b branch-name



            2- MAKE CHANGES IN VSCODE - 
            Adding files and updating the code to add more features and functionality and styling. A- Go to the cwd and open vscode.
                How to work with React project :
                    - npm start [as basic setup is already there, else different steps for react project]
                    - if any files is not matching, install it.
                    - here scripts file has to be installed [in this project]  
                    B- Once all changes are made. Follow below steps to push code from local pc to github.

                    

            3- Make changes in git bash - 
            
             STEPS TO BE FOLLOWED IN GIT BASH SO THAT LOCAL CODE IS TRANSFERED TO GITHUB
             Summary of Commands
              bash
              Copy code
              # Create and switch to a new branch
              git checkout -b branch-name
              
              # Stage changes
              git add .
              
              # Commit changes
              git commit -m "Your commit message"
              
              # Push changes to the remote repository
              git push origin branch-name
              
              # Pull changes from the remote branch
              git pull origin branch-name
              Let me know if you need further clarification!

       **********************************************************************
    
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
