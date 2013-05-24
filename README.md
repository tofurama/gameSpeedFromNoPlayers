Game Speed from Number of Players
======================

This is a game where the speed of obstacles is based on the number of people playing on the server. It is currently a proof-of-concept to see if it is possible to create a playable game where the difficulty is based off of the number of people playing instead of the amount of time spent, etc.

The game also has the added feature of having almost identical games for two clients that are connected to the same server at the same time.

These features are accomplished by having the position of almost all obstacles updated on the server, independant of player position or information from the clients. All obstacles whose position is not updated on the server instead have their state set by the server; the clients then update the position of these obstacles independant of games on other clients.

The project uses jQuery 1.8. for sending and processing ajax calls as well as editing DOM elements. The jQuery liscence can be found at [jquery.org/license](http://jquery.org/license).

Below is an overview of files that I have created; these files are free to use, modify, and distribute as long as the copyright header remains intact. These files may be used and ditributed seperately.

canvasJS.js
======================

This is a custom, basic library for the HTML5 canvas object. It is used in this project to create and control the canvas element. All functions that accept parameters have been designed to accept them in either of two ways:
  1) Traditional - passing in parameters from left to right (ex. function(*xPos*, *yPos*))
  2) Literal - passing in a literal with the name of the items (ex. function({x: *xPos*, y: *yPos*}))

This is meant to allow the developer to write code in the most intuitive style for the developer. The code in this project mainly uses the literal method.

index.php
======================

This is the file that the client loads to start the game. It contains all client code and creates the canvas element. It only changes the position of five objects: the player and the four "hunters" (green dots). It contains a Coordinate class which holds x, y, z, and state positions (z is not used in this project). This class is referenced by the server code and is used to store information about all objects in the game. It sends an ajax request to the server every 30ms to get updated information about the game.

dimensions.php
======================

This file is used to store variables that need to be synce between the client and the server. These variables include the canvas width and height and the number of server-updated objects.

coordinateCollector.php
======================

This file uses shared memory to track the position of game objects. It updates the position of objects each time it is called. It is this functionality which makes the pieces faster as more people connect (the more players, the more requests per second, and the more position updates perfermed each second). A multiplier variable is used to fine-tune the amount that pieces move each update. The state of the hunters is based off of the server's time in seconds.
