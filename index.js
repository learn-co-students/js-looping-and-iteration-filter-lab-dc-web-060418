// Code your solution in this file

function findMatching(drivers, driverName) {
  return drivers.filter(function(name){
    return driverName.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, driverName) {
  return drivers.filter(function(name){
    return name.startsWith(driverName)})
}

function matchName(drivers, driverName) {
  return drivers.filter(function(driver) {
    return driver.name === driverName})
}
