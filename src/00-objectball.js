// src/00-objectball.js

function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Testing the gameObject function
  console.log(gameObject());
//
  function homeTeamName() {
    return gameObject().home.teamName;
  }
  
  console.log(homeTeamName()); // "Brooklyn Nets"

//
  function numPointsScored(playerName) {
    const players = gameObject().home.players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  
    const awayPlayers = gameObject().away.players;
    if (awayPlayers[playerName]) {
      return awayPlayers[playerName].points;
    }
  
    return undefined; // Player not found
  }
  
  console.log(numPointsScored("Alan Anderson")); // 22
//

  function shoeSize(playerName) {
    const players = gameObject().home.players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  
    const awayPlayers = gameObject().away.players;
    if (awayPlayers[playerName]) {
      return awayPlayers[playerName].shoe;
    }
  
    return undefined; // Player not found
  }
  
  console.log(shoeSize("Reggie Evans")); // 14
//

  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    }
    if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return undefined; // Team not found
  }
  
  console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
  
//
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
//


  function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    const players = teamName === game.home.teamName ? game.home.players : game.away.players;
  
    for (let player in players) {
      numbers.push(players[player].number);
    }
  
    return numbers;
  }
  
  console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]



//
  function playerStats(playerName) {
    const players = gameObject().home.players;
    if (players[playerName]) {
      return players[playerName];
    }
  
    const awayPlayers = gameObject().away.players;
    if (awayPlayers[playerName]) {
      return awayPlayers[playerName];
    }
  
    return undefined; // Player not found
  }
  
  console.log(playerStats("Alan Anderson")); // { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }
//



  function bigShoeRebounds() {
    const players = { ...gameObject().home.players, ...gameObject().away.players };
    let maxShoeSize = 0;
    let rebounds = 0;
  
    for (let player in players) {
      if (players[player].shoe > maxShoeSize) {
        maxShoeSize = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  
    return rebounds;
  }
  
  console.log(bigShoeRebounds()); // 12 (for Bismak Biyombo with shoe size 16)
  


  
//Bonus Function
  function mostPointsScored() {
    const players = { ...gameObject().home.players, ...gameObject().away.players };
    let maxPoints = 0;
    let topPlayer = "";
  
    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topPlayer = player;
      }
    }
  
    return topPlayer;
  }
  
  console.log(mostPointsScored()); // "Ben Gordon" (33 points)
  


  