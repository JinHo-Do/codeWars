// https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript
//
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  let str = url;

  if (url.indexOf('//') > -1) {
    str = url.substring(url.indexOf('//') + 2);
  }

  let arr = str.split('.');

  return arr[0] === 'www' ? arr[1] : arr[0];
}
