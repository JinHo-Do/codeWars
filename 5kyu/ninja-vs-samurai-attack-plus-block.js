// https://www.codewars.com/kata/ninja-vs-samurai-attack-plus-block/train/javascript
//
// Something is wrong with our Warrior class. All variable should initialize properly and the attack method is not working as expected.
//
// If properly set, it should correctly calculate the damage after an attack (if the attacker position is == to the block position of the defender, no damage; otherwise, the defender gets either 10 damage if hit "high" or 5 damage if it "low". If no block is set, the defender takes 5 extra damage to his health.
//
// For some reason, the health value is not being properly set. The following shows an example of this code being used:
//
// var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');
//
// ninja.block = Position.high;
// samurai.attack(ninja, Position.low);
// // ninja.health should == 95
// The warrios must be able to fight to the bitter end, and good luck to the most skilled!
//
// Notice that health can't be below 0: once hit to 0 health, a warrior attribute deceased becomes true; if hit again, the zombie attribute becomes true too!

Position = {
  high: 'h',
  low: 'l'
}

Warrior = function(name){
  this.name = name;
  this.health = 100;
}

Warrior.prototype = {
  attack: function(enemy, position){
    if (enemy.block != position){
      this.damage = position == Position.high ? 10 : 5;
      // if enemy is not blocking at all then give more damage
      if (!enemy.block){
        this.damage += 5;
      }// (this, argu)
      setHealth.call(enemy, enemy.health - this.damage);
    }
  }
}

// private functions
function setHealth(value){
  this.health = Math.max(0, value);
  if (this.health == 0){
    this.deceased = true;
    this.zombie = false;
  }
  else if(this.deceased){
    this.zombie = true;
  }
}
