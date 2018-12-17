function humanReadable (seconds) {
  hh = Math.floor(seconds / 3600).toString();
  mm = Math.floor((seconds - hh * 3600) / 60).toString();
  ss = (seconds % 60).toString();

  hh = Array(3 - hh.length).join('0') + hh;
  mm = Array(3 - mm.length).join('0') + mm;
  ss = Array(3 - ss.length).join('0') + ss;

  return hh + ':' + mm + ':' + ss;
}
console.log(humanReadable(86400));
