<?php
#
#Copyright 2013
#This file is free to use, modify, and distribute as long as this header remains intact.
#



#get dimensions
require_once("dimensions.php");

#multiplier - used to fine-tune speed on server
#the higher it is, the slower the blue dots
#it's fairly low since I was testing with low traffic
#please change if the game regularly becomes unplayable
$multiplier = 1.3;

#current dot we're on
$curoffset = 0;

#for some windows servers
if( !function_exists('ftok') )
{
    function ftok($pathname, $proj_id) {
        $st = @stat($pathname);
        if (!$st) {
            return -1;
        }
    
        $key = sprintf("%u", (($st['ino'] & 0xffff) | (($st['dev'] & 0xff) << 16) | (($proj_id & 0xff) << 24)));
        return $key;
    }
}

#see if we have a key to use, otherwise use the file as a key
if(!isset($_POST['key']))
    $shm_key = ftok(__FILE__, 't');
else
    $shm_key = (int)$_POST['key'];

#open the shared memory
$shm_id = shmop_open($shm_key, "c", 0644, 8000);
if(!$shm_id)
    echo "Failure";
else
{
    #loop through the normal dots
    for($curoffset =  0; $curoffset < $maxOffset; $curoffset++)
    {
        $offset = $curoffset * 10;
    
        //if the shared memory is open and has space for data
        if(shmop_size($shm_id) > 0)
        {
            //get the coordinates for the current dot (each dot takes up 10 characters)
            $coords = shmop_read($shm_id, $offset, 10);
            
            //parse the position and state from the coordinates
            $x = (int)substr($coords, 0, 4);
            $y = (int)substr($coords, 4, 4);
            $state1 = (int)substr($coords, 8, 1);
            $state2 = (int)substr($coords, 9, 1);
        
            //if it was blank memory loaded, position ourselves randomly
            if($x == 0 && $y == 0 && $state1==0 && $state2==0)
            {
                $x = rand(-14,($cWidth-14)*$multiplier);
                $y = rand(-14, ($cHeight-14)*$multiplier);
                $state1 = rand(0,2);
                $state2 = rand(0,2);
            }
                
            if($state1 == 0 && $state2 == 0)
            {
                $state1 = 2;
                $state2 = 2;
            }
                
            //increase position
            $x += $state1;
            $y += $state2;
            
            //check if we went out-of bounds
                //if so, put us on the top/left side of the screen
            if($x > ($cWidth)*$multiplier)
            {
                $x = rand(-14,($cWidth-14)*$multiplier);
                $y = -14;
                $state1 = rand(0,2);
                $state2 = rand(1, 2);
            }
            if($y > ($cHeight)*$multiplier)
            {
                $x = -14;
                $y = rand(-14, ($cHeight-14)*$multiplier);
                $state1 = rand(1,2);
                $state2 = rand(0,2);
            }
            
            //save current data to shared memory
            $numZeros = 4-strlen($x);
            for($i = 0; $i < $numZeros; $i++)
            {
                $x = "0".$x;
            }
        
            $numZeros = 4-strlen($y);
            for($i = 0; $i < $numZeros; $i++)
            {
                $y = "0".$y;
            }
        
            $numZeros = 2-strlen($state);
            for($i = 0; $i < $numZeros; $i++)
            {
                $state = "0".$state;
            }
        
            $compact = $x.$y.$state1.$state2;
            shmop_write($shm_id, $compact, $offset);
        
            //re-read the data to use
            $coords = shmop_read($shm_id, $offset, 10);
            $x = (int)substr($coords, 0, 4);
            $y = (int)substr($coords, 4, 4);
            $state = (int)substr($coords, 8, 2);
        }

        //if data was loaded, send the position data to the client
        if(isset($coords) && $coords != null)
        {
            $x = substr($coords, 0, 4);
            $y = substr($coords, 4, 4);
            $state = substr($coords, 8, 2);
            ?>
            <script type="text/javascript">
                coordinates[<?php echo $curoffset; ?>].x = <?php echo ((int)$x)/$multiplier; ?>;
                coordinates[<?php echo $curoffset; ?>].y = <?php echo ((int)$y)/$multiplier; ?>;
                coordinates[<?php echo $curoffset; ?>].z = 0;
                coordinates[<?php echo $curoffset; ?>].state = <?php echo (int)$state; ?>;
            </script>
            <?php
        }
    }
    

    //Edge Crawlers
    for($curoffset = $maxOffset; $curoffset < $maxOffset + 2; $curoffset++)
    {
        //set our offset in the data (requires 12 characters since negatives are in there
        $offset = $maxOffset * 10 + ($curoffset - $maxOffset + 1) * 12;
    
        if(shmop_size($shm_id) > 0)
        {
            $coords = shmop_read($shm_id, $offset, 12);
            $x = (int)substr($coords, 0, 4);
            $y = (int)substr($coords, 4, 4);
            $state1 = (int)substr($coords, 8, 2);
            $state2 = (int)substr($coords, 10, 2);
            
            $x += $state1;
            $y += $state2;
            //make sure we don't stand still
            if($state1 == 0 && $state2 == 0)
            {
                $state1 = 5;
            }
                
            //move along the borders; set our position at each stop
            if($x > ($cWidth)*$multiplier - 15)
            {
                $x = ($cWidth)*$multiplier - 24;
                $state1 = 0;
                $state2 = rand(3, 9);
            }
            
            if($y > ($cHeight)*$multiplier - 15)
            {
                $y = ($cHeight)*$multiplier - 24;
                $state1 = -1 *  rand(3, 9);
                $state2 = 0;
            }
            
            if($y < 15)
            {
                $y = 24;
                $state1 =  rand(3, 9);
                $state2 = 0;
            }
                
            if($x < 15)
            {
                $x = 15;
                $state1 = 0;
                $state2 = -1 *  rand(3, 9);
            }
            
            //save our positon/state data
            $numZeros = 4-strlen($x);
            for($i = 0; $i < $numZeros; $i++)
            {
                $x = "0".$x;
            }
        
            $numZeros = 4-strlen($y);
            for($i = 0; $i < $numZeros; $i++)
            {
                $y = "0".$y;
            }
        
            $state1 = (string)$state1;
            $numZeros = 2-strlen($state1);
            for($i = 0; $i < $numZeros; $i++)
            {
                $state1 = "0".$state1;
            }
            
            $state2 = (string)$state2;
            $numZeros = 2-strlen($state2);
            for($i = 0; $i < $numZeros; $i++)
            {
                $state2 = "0".$state2;
            }
            
            $compact = $x.$y.$state1.$state2;
            shmop_write($shm_id, $compact, $offset);
        
            //reload our data
            $coords = shmop_read($shm_id, $offset, 12);
            $x = (int)substr($coords, 0, 4);
            $y = (int)substr($coords, 4, 4);
            $state = (int)substr($coords, 8, 4);
        }

        //if our data is set, send it to the client
        if(isset($coords) && $coords != null)
        {
            $x = substr($coords, 0, 4);
            $y = substr($coords, 4, 4);
            $state = substr($coords, 8, 2);
            ?>
            <script type="text/javascript">
                coordinates[<?php echo $curoffset; ?>].x = <?php echo ((int)$x)/$multiplier; ?>;
                coordinates[<?php echo $curoffset; ?>].y = <?php echo ((int)$y)/$multiplier; ?>;
            </script>
            <?php
        }
    }
        //send the status update for the hunters (based off of server time)
        ?>
        <script type="text/javascript">
            hunters[0].status = <?php echo (time() % 120) - 60; ?>;
            hunters[1].status = <?php echo (time() % 120) - 62; ?>;
            hunters[2].status = <?php echo (time() % 120) - 65; ?>;
            hunters[3].status = <?php echo (time() % 120) - 68; ?>;
        </script>
        <?php
        //close our shared memory; we're done with it
        shmop_close($shm_id);
}

?>