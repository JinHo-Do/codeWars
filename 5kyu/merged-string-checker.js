// https://www.codewars.com/kata/merged-string-checker/train/javascript
//
// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
//
// The restriction is that the characters in part1 and part2 are in the same order as in s.
//
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
//
// For example:
//
// 'codewars' is a merge from 'cdw' and 'oears':
//
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, part1, part2) {
  let p1 = part1.split('');
  let p2 = part2.split('');

  for (var i = 0; i < s.length; i++) {
    //  s[i]가 p1[0]과 p2[0]에 둘 다 있으면
    if (s[i] === p1[0] && s[i] === p2[0]) {
      let count1 = 1;  // 비교를 위한 카운트 변수
      let count2 = 1;

      //  다음 인덱스도 비교하여 더 비슷한 쪽의 [0]을 shift()한다.
      for (let j = 1; j < 10; j++) {
        if (s[i + j] === p1[j]) {
          count1++;
        }
        if (s[i + j] === p2[j]) {
          count2++;
        }
        if (count1 !== count2){
          break;  //  어느 한쪽이 더 많은지 정해졌으므로 종료.
        }
      }

      if (count1 > count2) {  // 더 많이 같은 쪽만 shift();
        p1.shift();
      } else {
        p2.shift();
      }

    } else if (s[i] === p1[0]) {
      p1.shift();
    } else if (s[i] === p2[0]) {
      p2.shift();
    } else {
      return false;
    }
  }

  return p1.length === 0 && p2.length === 0
}
