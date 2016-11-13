// https://www.codewars.com/kata/the-supermarket-queue/train/javascript
//
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
// The function has two input variables:
//
// customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.
//
// Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free. So, for example:
//
// queueTime([5,3,4], 1)
// // should return 12
// // because when n=1, the total time is just the sum of the times
//
// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.
// N.B. You should assume that all the test input will be valid, as specified above.
//
// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

function queueTime(customers, n) {
  let arr = new Array(n).fill(0); // n개의 아이템을 가진 배열을 생성하고 0으로 채워라.

  for (let i = 0; i < customers.length; i++) {
    let temp = arr.indexOf(Math.min(...arr)); // 제일 작은 인덱스를 기록. Math.min() 안에 ...arr를 넣으면 배열 안의 값 중 큰 숫자를 찾아 준다.
    arr[temp] += customers[i];  // 제일 작은 인덱스에 커스터머의 아이템을 더한다.
  }

  return Math.max(...arr); // 제일 큰 숫자가 최종 걸리는 시간이므로 이것을 리턴.
}

module.exports = queueTime;
