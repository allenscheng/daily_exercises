function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var splitDate = userDate.split("/");
  if (splitDate[1] < 10) {
    splitDate[1] = "0" + splitDate[1];
  } else if (splitDate[0] < 10) {
    splitDate[0] = "0" + splitDate[0];
  }
  var format = splitDate[2] + splitDate[0] + splitDate[1];
  return format;
}

console.log(formatDate("12/31/2014"));
