function findMatching(drivers, string) {
  return drivers.filter( function(el) {
    return (el.toLowerCase() == string.toLowerCase());
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( function(driver) {
    return driver.startsWith(string);
  })
}

function matchName(drivers, string) {
  return drivers.filter( function(driver) {
    return driver.name == string;
  })
}
