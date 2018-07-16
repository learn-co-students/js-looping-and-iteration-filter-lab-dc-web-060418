// Code your solution in this file
function findMatching(drivers,name) {
    return drivers.filter(function(e) {
        return (name.toLowerCase() === e.toLowerCase())     
    })
}

function fuzzyMatch(drivers,name) {
    return drivers.filter((driver)=>{ return driver.slice(0,name.length).toLowerCase()===name.toLowerCase()})
}

function matchName(drivers,name) {
    return drivers.filter((driver)=>{return driver['name']===name})
}