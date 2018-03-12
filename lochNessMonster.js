function isLockNessMonster(s) {
  if (
    s.includes("3.50") ||
    s.includes("three fifty") ||
    s.includes("tree fiddy")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to 3.50"
  )
);
