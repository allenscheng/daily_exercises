function maskify(cc) {
  let visible = cc.slice(-4);
  let mask = "";
  if (cc.length > 4) {
    for (let i = 0; i < cc.length - 4; i++) {
      mask += "#";
    }
    return (mask += visible);
  } else {
    return cc;
  }
}
console.log(maskify("4556364607935616"));
