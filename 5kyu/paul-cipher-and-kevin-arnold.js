// https://www.codewars.com/kata/paul-cipher-and-kevin-arnold/train/javascript
//
// We need to encode a message.
//
// Only alpha characters will be encoded. Non-alpha characters will be copied. So, the message " 0123. " would be encoded to " 0123. ".
//
// For alpha characters, we will follow these rulse:
//
// 1.  All alpha characters will be treated as upper case
// 2.  The first alpha character will not change (except for switching to upper case).
// 3.  All subsequent alpha characters will be shifted toward 'Z' by the
//     alphabetical position of the previous alpha character.
//     (wrap back to 'A' if 'Z' is passed)
// For example: "He1lo" would be encoded as follows:
//
// H -> H (first alpha character does not change)
// e -> M (H is the previous alpha character, and is the 8th letter in the alphabet.  E + 8 = M)
// 1 -> 1 (non alpha characters do not change)
// l -> Q (E is the previous alpha character, and is the 5th letter in the alphabet.  L + 5 = Q)
// o -> A (L is the previous alpha character, and is the 12th letter in the alphabet.  O + 12 = A)
// So, "He1lo" would be encoded to "HM1QA"
//
// Write two functions. One to encode and one to decode. (Decoding "HM1QA" should yield "HE1LO")
//
// For both functions, empty strings and null strings should return empty strings.

function encode(input) {
  if (input === null) return '';

  let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = '';
  let preIdx = 0;

  input.toUpperCase().split('').map((v, i) => {
    let findIdx = charSet.indexOf(v);

    if (i === 0) {
      output += v;
      preIdx = findIdx + 1;
    } else if (findIdx === -1) {
      output += v;
    } else {
      let chgIdx = findIdx + preIdx;

      if (chgIdx > 25) chgIdx = chgIdx % 26;

      output += charSet[chgIdx];
      preIdx = findIdx + 1;
    }

  });

  return output;
}

function decode(input) {
  if (input === null) return '';

  let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = '';
  let preIdx = 0;

  input.toUpperCase().split('').map((v, i) => {
    let findIdx = charSet.indexOf(v);

    if (i === 0 && isNaN(+v)) {
      output += v;
      preIdx = findIdx + 1;
    } else if (findIdx === -1) {
      output += v;
    } else {
      let chgIdx = findIdx - preIdx;

      if (chgIdx < 0) chgIdx = chgIdx + 26;

      output += charSet[chgIdx];
      preIdx = charSet.indexOf(output[output.length - 1]) + 1;
    }

  });

  return output;
}
