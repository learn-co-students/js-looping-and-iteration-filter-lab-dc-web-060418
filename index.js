// Code your solution in this file


function findMatching(drivers, string) {
  const lowerCaseString = string.toLowerCase();
  const result = drivers.filter(driver => driver.toLowerCase().includes(lowerCaseString));
  return result;
}


function fuzzyMatch(drivers, string){

  const lowerCaseString = string.toLowerCase();
  const result = drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseString));
  return result;
}


function matchName(drivers, string){
  // driver is an object with a name: return each element whose name matches the string

  const result = drivers.filter(
    function(driver){return driver.name == string;}
  );
  return result;
}
