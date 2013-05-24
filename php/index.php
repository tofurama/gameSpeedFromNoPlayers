<!--
Copyright 2013
This file is free to use, modify, and distribute as long as this header remains intact.
-->
<?php
require_once("dimensions.php");
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script type="text/javascript" src="/js/canvasJS.js"></script>
    <script type="text/javascript" src="/js/jquery-1.8.2.min.js" ></script>
</head>
<body >
    <div id="CanvasHolder" style="float:left; width:<?php echo $cWidth+5; ?>;" ></div>
    <div id="Score" style="float:left;"></div>
    <script type="text/javascript">
        //Initialization of the client processes
        var canvas = new CanvasElement("CanvasHolder", "canvas", "<?php echo $cWidth; ?>", "<?php echo $cHeight; ?>", "2d", false, KeyDown, KeyUp);
        var playDim = 12;
        var speed = 7.5;
        var score = 0;
        var started = false;
        document.getElementById("canvas").addEventListener("click", GameStart);
        
        var playerDirectionX = 0;
        var playerDirectionY = 0;
        
        var coordinates = new Array();
        var playerCoordinates = new Coordinates(canvas.width/2,canvas.height/2,0,190);
        var count = 0;
        
        //start collecting obstacle data from the server
        GetCoordinates();
        
        for(var i = 0; i < <?php echo $maxOffset + 2; ?>; i++)
        {
            coordinates[i] = new Coordinates(0,0,0,0);
        }
        
        var increase = true;
        var timeout;
        
        //Variables for the "hunters" (green dots)
        var hunters = new Array();
        hunters[0] = new Coordinates(0,0,0,800);
        hunters[1] = new Coordinates(<?php echo $cWidth; ?>,<?php echo $cHeight; ?>,0,800);
        hunters[2] = new Coordinates(<?php echo $cWidth; ?>,0,0,800);
        hunters[3] = new Coordinates(0,<?php echo $cHeight; ?>,0,800);
        
        var destPoints = new Array();
        destPoints[0] = new Coordinates(50,50,0,0);
        destPoints[1] = new Coordinates(<?php echo $cWidth -5; ?>,<?php echo $cHeight - 50; ?>,0,0);
        destPoints[2] = new Coordinates(<?php echo $cWidth -5; ?>,50,0,0);
        destPoints[3] = new Coordinates(50,<?php echo $cHeight - 50; ?>,0,0);
        
        //function to start the game initially
        function GameStart(evt)
        {
            this.removeEventListener('click',arguments.callee,false);
            hunters[0] = new Coordinates(0,0,0,800);
            hunters[1] = new Coordinates(<?php echo $cWidth; ?>,<?php echo $cHeight; ?>,0,800);
            hunters[2] = new Coordinates(<?php echo $cWidth; ?>,0,0,800);
            hunters[3] = new Coordinates(0,<?php echo $cHeight; ?>,0,800);
            started = true;
        }
        
        //Handles Key Down events
        function KeyDown(evt){
            if(!started)
                return;
            var charCode = evt.which;
            if(charCode == 87)
            {
                playerDirectionY = -speed;
                if(playerCoordinates.y < playDim)
                    playerCoordinates.y = playDim;
            }
            if(charCode == 65)
            {
                playerDirectionX = -speed;
                if(playerCoordinates.x < playDim)
                    playerCoordinates.x = playDim;
            }
            if(charCode == 68)
            {
                playerDirectionX = speed;
                if(playerCoordinates.x > <?php echo $cWidth; ?>-playDim)
                    playerCoordinates.x = canvas.width-playDim;
            }
            if(charCode == 83)
            {
                playerDirectionY = speed;
                if(playerCoordinates.y > <?php echo $cHeight; ?>-playDim)
                    playerCoordinates.y = canvas.height-playDim;
            }
        }
        
        //Handles Key Up events
        function KeyUp(evt)
        {
            if(!started)
                return;
            var charCode = evt.which;
            if(charCode == 87 && playerDirectionY < 0)
            {
                playerDirectionY = 0;
            }
            if(charCode == 65 && playerDirectionX < 0)
            {
                playerDirectionX = 0;
            }
            if(charCode == 68 && playerDirectionX > 0)
            {
                playerDirectionX = 0;
            }
            if(charCode == 83 && playerDirectionY > 0)
            {
                playerDirectionY = 0;
            }
        }
        
        //Update hunters based off of the state (state is collected from the server)
        function UpdateHunters()
        {
            //position is updated on the client to allow the player to be chased
            for(var i = 0; i < hunters.length; i++)
            {
                //if we aren't active, reset us
                if(hunters[i].status <= 0)
                {
                    if(hunters[0].x != 0 && hunters[0].y != 0 && hunters[0].status < 0)
                    {
                        hunters[0] = new Coordinates(0,0,0,800);
                        hunters[1] = new Coordinates(<?php echo $cWidth; ?>,<?php echo $cHeight; ?>,0,800);
                        hunters[2] = new Coordinates(<?php echo $cWidth; ?>,0,0,800);
                        hunters[3] = new Coordinates(0,<?php echo $cHeight; ?>,0,800);
                        return true;
                    }
                    continue;
                }
                //if it's not time to chase yet, move to random spots on the map
                if(hunters[i].status < 35 || !started)
                {
                    if(Math.abs(destPoints[i].x - hunters[i].x) > 7 && Math.abs(destPoints[i].y - hunters[i].y) > 7)
                    {
                        var normalized = NormalizeCoordinates(new Coordinates(destPoints[i].x - hunters[i].x, destPoints[i].y - hunters[i].y, 0, 0));
                        hunters[i].x += Math.ceil(normalized.x + (.3 * sign(normalized.x))) * 3;
                        hunters[i].y += Math.ceil(normalized.y + (.3 * sign(normalized.y))) * 3;
                    }
                    else
                    {
                        destPoints[i].x = Math.floor(Math.random() * <?php echo $cWidth -100; ?>) + 50;
                        destPoints[i].y = Math.floor(Math.random() * <?php echo $cHeight -100; ?>) + 50;
                    }
                }
                //else, chase the player
                else
                {
                    var normalized = NormalizeCoordinates(new Coordinates(playerCoordinates.x - hunters[i].x, playerCoordinates.y - hunters[i].y, 0, 0));
                    hunters[i].x += normalized.x * 6;
                    hunters[i].y += normalized.y * 6;
                }
                    
                //draw us onscreen
                canvas.circle({x:hunters[i].x, y:hunters[i].y, radius:10, lineWidth:2, fillStyle:"green", strokeStyle:"blue"});
                //check if we touch the player
                if(started && playerCoordinates.state <= 0 && GetDistance(playerCoordinates, hunters[i]) < 441)
                {
                    Die();
                    return false;
                }
                //big points for surviving us
                score += 2;
            }
            return true;
        }
        
        //get the sign of a variable
        function sign(x)
        {
            if(x < 0)
                return -1;
            return 1;
        }
        
        //Move the player based off of the player's direction
        function MovePlayer()
        {
            playerCoordinates.y += playerDirectionY;
            playerCoordinates.x += playerDirectionX;
            
            //lock us to the screen
            if(playerCoordinates.y < playDim)
                playerCoordinates.y = playDim;
            if(playerCoordinates.x < playDim)
                playerCoordinates.x = playDim;
            if(playerCoordinates.x > <?php echo $cWidth; ?>-playDim)
                playerCoordinates.x = canvas.width-playDim;
            if(playerCoordinates.y > <?php echo $cHeight; ?>-playDim)
                playerCoordinates.y = canvas.height-playDim;
        }
        
        //draw every dot onto the screen (used when the player dies to make the game look complete)
        function DrawAll()
        {
                
            for(var i = 0; i < coordinates.length; i++)
            {
                canvas.circle({x:coordinates[i].x, y:coordinates[i].y, radius:10, lineWidth:2, fillStyle:"blue", strokeStyle:"green"});
            }
            for(var i = 0; i < hunters.length; i++)
            {
                if(hunters[i].status <= 0)
                {
                    continue;
                }
                canvas.circle({x:hunters[i].x, y:hunters[i].y, radius:10, lineWidth:2, fillStyle:"green", strokeStyle:"blue"});
            }
        }
        
        //update the game
        function UpdateGame()
        {
            //clear the screen
            canvas.clear();
            
            //update the player
            MovePlayer();
            
            //only draw the player if the game has started
            if(started && playerCoordinates.state > 0)
            {
                //invulnerable state, has different artwork
                playerCoordinates.state--;
                canvas.circle({x:playerCoordinates.x, y:playerCoordinates.y, radius:10, lineWidth:2, fillStyle:"orange", strokeStyle:"yellow"});
            }
            else if(started)
            {
                canvas.circle({x:playerCoordinates.x, y:playerCoordinates.y, radius:10, lineWidth:2, fillStyle:"red", strokeStyle:"black"});
            }
            if(!UpdateHunters())
                return false;
                
            //update all blue dots; position is changed on the server and sent to the client
            for(var i = 0; i < coordinates.length; i++)
            {
                canvas.circle({x:coordinates[i].x, y:coordinates[i].y, radius:10, lineWidth:2, fillStyle:"blue", strokeStyle:"green"});
                if(started && playerCoordinates.state <= 0)
                {
                    //check if the dot touches the player
                    if(GetDistance(playerCoordinates, coordinates[i]) < 441)
                    {
                        Die();
                        return false;
                    }
                }
            }
            
            //increment score for surviving
            score += 1;
            
            //draw text on screen based on the state
            if(started && playerCoordinates.state > 0)
            {
                score = 0;
                canvas.drawText({text:"Game Start: " + Math.floor(playerCoordinates.state/10), x:<?php echo 10; ?>,y:20,font:"20pt Calibri", fillStyle:"black", textAlign:"left"});
            }
            else if(started)
                canvas.drawText({text:"Score: " + score, x:<?php echo $cWidth-10; ?>,y:20,font:"20pt Calibri", fillStyle:"black", textAlign:"right"});
            else
                canvas.drawText({text:"Click to Start", x:250,y:250,font:"italic 40pt Calibri", fillStyle:"black", textAlign:"center", textBaseline:"middle"});
            
            //update position of blue dots every 30ms
            timeout = setTimeout(GetCoordinates, 30);
            //timeout = setTimeout(UpdateGame);
        }
        
        //get coordinates and states of the dots from the server
        function GetCoordinates()
        {
            $.ajax({
                url: "coordinateCollector.php",
                dataType: "html",
                success:function(data, textStatus, jqXHR){$("#serverUpdate").html(data);UpdateGame();},
                type: "POST",
                data: {},
            });
        }
        
        //class to hold coordinats/state for objects
        function Coordinates(x, y, z, state)
        {
            this.x = x;
            this.y = y;
            this.z = z;
            this.state = state;
        }
        
        //normalize a coordinate
        function NormalizeCoordinates(coordBase)
        {
            var magnitude = MagnitudeCoordinates(coordBase);
            coord = new Coordinates(coordBase.x/magnitude, coordBase.y/magnitude, 0, 0);
            return coord;
        }
        
        //get the magnitude of a coordinate
        function MagnitudeCoordinates(coord)
        {
            return Math.sqrt((coord.x * coord.x) + (coord.y * coord.y));
        }
        
        //Die function; what happens when the player dies
        function Die()
        {
            //finish drawing everything to screen (makes the scene look complete)
            DrawAll();
            
            //draw text
            canvas.drawText({text:"Game Over", x:250,y:250,font:"italic 40pt Calibri", fillStyle:"black", textAlign:"center"});
            canvas.drawText({text:"Score: "+ score, x:250,y:300,font:"30pt Calibri", fillStyle:"black", textAlign:"center"});
            
            //reset coordinates and player direction
            playerCoordinates = new Coordinates(canvas.width/2,canvas.height/2,0,190);
            $("#canvas").focus();
            playerDirectionY = 0;
            playerDirectionX = 0;
            
            //wait for a click to reset the game
            document.getElementById("canvas").addEventListener("click", GameReset);
            return false;
        }
        
        //Reset the game
        function GameReset(evt)
        {
            this.removeEventListener('click',arguments.callee,false);
            hunters[0] = new Coordinates(0,0,0,800);
            hunters[1] = new Coordinates(<?php echo $cWidth; ?>,<?php echo $cHeight; ?>,0,800);
            hunters[2] = new Coordinates(<?php echo $cWidth; ?>,0,0,800);
            hunters[3] = new Coordinates(0,<?php echo $cHeight; ?>,0,800);
            score = 0;
            timeout = setTimeout(GetCoordinates);
            return false;
        }
        
        //get the distance between two coordinates
        function GetDistance(coord1, coord2)
        {
            var xs = coord1.x - coord2.x;
            xs *= xs;
            var ys = coord1.y - coord2.y;
            ys *= ys;
            return xs + ys;
        }
    </script>
    <div id="serverUpdate"></div>
</body>
</html>
