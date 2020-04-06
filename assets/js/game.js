

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var startGame = function() {
    // reset player stats
    playerInfo.reset();
  
  for (var i=0; i< enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
      
          var pickedEnemyObj = enemyInfo[i];
      
          pickedEnemyObj.health = randomNumber(40, 60);
          
          fight(pickedEnemyObj);

          if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store?");

            //if yes take them to store function
            if (storeConfirm) {
              shop();
            }
          }

          if (i < enemyInfo.length - 1) {
            shop();
          }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    
    endGame();
  };


for (var i = 0; i < enemyInfo.length; i++) {
  // call fight function with enemy robot

var fight = function(enemy) {
  console.log(enemy);
    while(enemy.health > 0 && playerInfo.health > 0) {

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm user wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
          }
        }

  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
  console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
  );


  // check enemy's health
  if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
    
      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

  var damage = randomNumber(enemy.attack - 3, enemy.attack);

  playerInfo.health = Math.max(0, playerInfo.health - damage);
  console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
  );

  // check player's health
  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
    break;
  } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
  }
} 
};

for(var i = 0; i < enemyInfo.length; i++) {
  console.log(enemy.names[i]);
  console.log(i);
  console.log(enemy.names[i] + " is at " + i + " index");
}

for(var i = 0; i < enemyInfo.length; i++) {
  var pickedEnemyObj = enemyInfo[i];
  enemy.health = 50;
  fight(pickedEnemyObj);
}

// start the game when the page loads
startGame();

// function to end the entire game
var endGame = function() {
  if (playerInfo.health > 0) {
    window.alert("The game has now ended. Let's see how you did!");
  }
  else { 
    window.alert("You've lost your robot in battle");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      startGame();
    }

    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to refill your health, upgrade your attack, or leave the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
        playerInfo.refillHealth();
        break;
    case "UPGRADE":  
    case "upgrade":
        playerInfo.upgradeAttack();
        break;

    case "LEAVE":  
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
}

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
  }, 
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
}
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];