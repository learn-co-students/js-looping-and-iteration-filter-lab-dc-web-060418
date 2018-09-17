// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(elm => elm.toUpperCase() === str.toUpperCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter(elm => elm.startsWith(str));
}

function matchName(arr, str) {
  return arr.filter(elm => elm.name === str);
}
