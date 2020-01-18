var app = new Vue({
    el: '#main',

    data: {
        foo: globalThis.Date(),
        foo1: 'barr'
    }



});



var mapp = new Vue({
    el: '#inputs',

    data: {
        message1: 'Select the tournament type',
        message2: 'Add new player',
        message3: 'All test below here.',
        food: 'cookie',
        tree: 'pine',
        numberofplayers: 'enter here',

        playerList: [
            { name:'Temp1', id:0},
            { name:'Temp2', id:1},
        ],

        matches: [
            {player1: 'aa', player2: 'bb', round: 0},
            {player1: 'bb', player2: 'cc', round: 1}
        ]

    },

    methods: {
            updatePlayerList: function () {

                count =  this.numberofplayers;
                i = 1;
                //clear array
                this.playerList = [];
                while (i <= count ) {

                    var player = "";
                    //create array (of players) based on the specified number of players
                    //console.log(player.concat('P', i));
                    this.playerList.push({
                        name: player.concat('P', i), id: i
                    })
                    i++;
                }
            },

            clearPlayerList: function () {

                this.playerList = [];
                
            },

            createRoudRobinMatches: function () {

                //clear "matches" array
                this.matches = [];
                //setup internal variables
                playersCount = this.playerList.length;
                roundNumber = playersCount-1;
                
                while(roundNumber > 0) {

                    firstPlayerIndex = 0;
                    lastPlayerIndex = playersCount - 1;
                   

                    //start creating matches, go through an itteration (create matches using all teams in the current array of teams)
                    while(firstPlayerIndex < lastPlayerIndex) {

                        var p1 = this.playerList[firstPlayerIndex];
                        var p2 = this.playerList[lastPlayerIndex];
                        //for testing
                        console.log("Round " + roundNumber + ": " + p1.name + " vs. " + p2.name);

                        this.matches.push({
                            player1: p1.name,
                            player2: p2.name,
                            round: roundNumber
                        })

                        //for testing 
                        //console.log("Round =" + roundNumber + ", 1st Player Name =" + this.matches[0][0] + ", 2nd Player Name =" + this.matches[0][1] );

                        firstPlayerIndex++;
                        lastPlayerIndex--;
                    }

                    //******START CODE HERE, REBUILD THE ARRAY!!!
                    
                    // get the last array element
                    var element = this.playerList[playersCount-1];
                    //splice (delete?) the last array element (it was saved in the previous step)
                    this.playerList.splice(playersCount-1);
                    //insert the saved (last) element in the second possition (array[1])
                    this.playerList.splice(1,0,element);

                    // for testing, show current array
                    //console.log(this.playerList);
                    //*******END CODE HERE, REBUILD THE ARRAY!!!

                    roundNumber--;
                }



                //for testing print array
                for (var i in this.matches)
                {
                    console.log("Match " + i+1);
                        for (var j in this.matches[i])
                        {
                            console.log(" " + this.matches[i][j]);
                        }

                }

                // for testing, show current array
                console.log(this.matches);








            /* FIRST VERSION - NOT WORKING WELL, NOT FINISHED *****       
                playersCount = this.playerList.length;
                lastIndex = playersCount-1;
                rounds = playersCount-1;  
                //"firstIndex" starts at 1 because the first element in the array is not moving
                firstIndex = 1;    
                itterations = playersCount;
                
                
                while (rounds > 0) {
                    
                    //first pair
                    nonmovingPlayer = this.playerList[0];
                    lastPlayer = this.playerList[lastIndex];
                   
                    //
                    while (itterations > 0) {

                        if (firstIndex < lastIndex) 
                        {
                            // we already have the first pair, adjust the array index for the next pair
                            firstIndex++;
                            lastIndex--;


                            // var player = "";
                            this.matches.push({
                                player1: this.playerList[firstIndex],
                                player2: this.playerList[lastIndex]
                            })
                            console.log(this.playerList);
                        }
                        else
                        {
                            // all pairs mathched, rebuild the array

                            
                        }
                        
                        itterations--;
                    }

                    rounds--;
                }
            ********************************/

                // for testing purposes
                //console.log(this.playerList.length);    
                //console.log(this.playerList[0].name);
                /* for testing purposes
                console.log(nonmovingPlayer);
                console.log(lastPlayer);
                */


            }
    }


});