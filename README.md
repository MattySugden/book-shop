This application is build using MongoDB, Express, React and Node.js (MERN)

MongoDB version 1.21.2


Interminal install the dependencies:

1.  npm init -y to initialise the application using npm.  -y defaults all settings to 'Yes'
2.  Install node.express dependencies, in terminal type: npm i express
3.  Install additional dependencies required, in terminal type: npm i express ejs express-ejs-layouts
4.  install nodemon to run the server locally and refresh with web applcation pages, in terminal type: npm i --save-dev nodemon
5.  Update the package.json file, replacing the exisiting script code with:
"scripts": {
    "devStart": "nodemon server.js",
    "start": "node server.js"
  },
6.  The main entry point has been changed in package.json to "server.js" from "index.js"
7.  To start the local server, in terminal type: npm run devStart.  The application should be accessible through a browser at http://localhost:3000

In 'Extensions' install rest client.

This application accesses a data.js file where records are stored (not in a database).  The test.rest file can test which user (Admin or Standard) can view a project or delete a project.  Admin can access all projects, but only a Standard user can access their own project.

To connect to the database being used, download MongoDB application to your device.  Then in terminal type:: npm i mongoose which is a library which integrates with MongoDB.