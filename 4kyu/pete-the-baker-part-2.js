// https://www.codewars.com/kata/pete-the-baker-part-2/train/javascript
//
// Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?
//
// Requirements:
//
// Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
// If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
// If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
// For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
// Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.
// Examples:
//
// var recipe = {flour: 200, eggs: 1, sugar: 100};
//
// getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
// getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
// getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}

function getMissingIngredients(recipe, added) {

  // 계산을 편하게 하기 위해 배열로 변환 시킨다.
  let rcpArr = [recipe.flour, recipe.eggs, recipe.sugar];
  let addArr = [added.flour || 0, added.eggs || 0, added.sugar || 0];
  let res = [];

  // 레시피 보다 현재 재료 양이 적으면 1개만 만들면 되므로 필요 양만 계산하여 리턴하면 된다.
  for (let i = 0; i < rcpArr.length; i++) {
    res[i] = rcpArr[i] - addArr[i];
  }

  // 레시피 보다 현재 재료 양이 많으면 만들 수 있는 수량이 최소 2개 이상이므로
  if (res.some(v => v < 0)) {

  // 가장 많이 차이나는 재료를 기준으로 최소 몇 개의 빵을 만들 수 있는지 계산한다.
    let needIdx = res.indexOf(Math.min(...res));
    let quantity = Math.ceil(addArr[needIdx] / rcpArr[needIdx]);

  // 최소 수량을 구했으므로 레시피를 수량에 맞게 계산하여 현재 재료를 빼면 필요한 재료의 양을 알 수 있다.
    rcpArr = rcpArr.map(v => v * quantity);

    for (let i = 0; i < rcpArr.length; i++) {
      res[i] = rcpArr[i] - addArr[i];
    }

  }

  let resObj = {flour: res[0], eggs: res[1], sugar: res[2]};

  // 필요양이 0인 재료는 문제에서 리턴하지 않을 것을 요구한다.
  for (let key in resObj) {
    if (resObj[key] === 0) {
      delete resObj[key];
    }
  }

  return resObj;
}
