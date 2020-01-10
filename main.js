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
        message3: 'All test below here...',
        food: 'cookie',
        tree: 'pine',
        numberofplayers: '5',

        playerList: [
            { name:'Temp1', id:0},
            { name:'Temp2', id:1},
        ],

        matches: [
            {player1: 'aa', player2: 'bb'},
            {player1: 'bb', player2: 'cc'}
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

                   
                playersCount = this.playerList.length;
                lastIndex = playersCount-1;
                rounds = playersCount-1;  
                //"firstIndex" starts at 1 because the first element in the array is not moving
                firstIndex = 1;    
                
                
                while (rounds > 0) {
                    
                    //first pair
                    nonmovingPlayer = this.playerList[0];
                    lastPlayer = this.playerList[lastIndex];
                
                    //
                    while (playersCount > 0) {

                        if (firstIndex < lastIndex) 
                        {
                            // match teh current pair


                        }
                        else
                        {
                            // all pairs mathched, rebuild the array

                            
                        }
                        /*
                            //get the first
                            p1 = this.playerList[firstIndex].name;

                            //get the last
                            p2 = this.playerList[lastIndex].name;


                        */

                        playersCount--;
                    }


                    rounds--;
                }


                // for testing purposes
                //console.log(this.playerList.length);    
                //console.log(this.playerList[0].name);
                console.log(nonmovingPlayer);
                console.log(lastPlayer);


            }
    }


});