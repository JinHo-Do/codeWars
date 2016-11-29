// https://www.codewars.com/kata/calculate-age-in-years/train/javascript
//
// Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.
//
// getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
// getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
// getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
// getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8

function getAge(birthDate, nowDate) {
  if (nowDate === undefined) return 1;

  let birthY = birthDate.getFullYear();
  let nowY = nowDate.getFullYear();
  let birthM = birthDate.getMonth();
  let nowM = nowDate.getMonth();
  let age = nowY - birthY;

  if (nowM === birthM) {
    birthDate.getDate() > nowDate.getDate() ? age-- : '';
  } else if (nowM < birthM) {
    age--;
  }

  return age;
}
