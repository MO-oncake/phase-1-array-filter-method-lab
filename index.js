function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}