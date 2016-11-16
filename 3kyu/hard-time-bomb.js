// https://www.codewars.com/kata/hard-time-bomb/train/javascript
//
// A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);

for (var key in global) {
  if (typeof global[key] === 'number') {
    var wireCode = global[key];
  }
}

bomb.CutTheWire(wireCode);
