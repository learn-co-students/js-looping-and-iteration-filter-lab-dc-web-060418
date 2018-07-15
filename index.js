function  findMatching(array, name) {
  return array.filter(function (driver_name) {return driver_name.toLowerCase() === name.toLowerCase() });
}

function  fuzzyMatch(array, letters) {
  const length = letters.length
  return array.filter(function (driver_name) {return driver_name.slice(0, length) === letters });
}

function  matchName(array, string) {
  return array.filter(function (driver) {return driver.name.toLowerCase() === string.toLowerCase() });
}
