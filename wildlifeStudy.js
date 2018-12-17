function findTheLocation (str) {
  var arr = str.split(" ");
  arr.reverse();
  var strReturn = "";
  var foundIt = false;
  var arrNot = ["At", "In", "The", "Recreation"];
  var arrPlaces = ["Park", "Preserve", "Reservation", "Reserve"];
  var recArea = "Recreation Area";

  if (/\./g.test(arr[0]) === true) {
    arr[0] = arr[0].slice(0, -1);
  }

  for (var i = 0; i < arr.length; i++) {
    if (arrPlaces.includes(arr[i])) {
      strReturn = arr[i];
      foundIt = true;
    }
    else if (arr[i] === "Area" && arr[i + 1] === "Recreation") {
      strReturn = recArea;
      foundIt = true;
    }
    else if (arr[i].charAt(0) === arr[i].charAt(0).toUpperCase() && foundIt === true) {
      if (arrNot.includes(arr[i])) {
        continue;
      }
      else {
        strReturn = arr[i] + " " + strReturn;
      }
    }
    else {
      foundIt = false;
    }
  }

  return strReturn;
}
console.log(findTheLocation('Parking south of the trailhead near the paper recycling bin I saw the bird perched near the entrance to Shaker Lakes Park'));