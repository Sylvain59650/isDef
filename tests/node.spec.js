global.isDef = function(obj) {
  return (obj !== null && typeof obj !== "undefined");
}
console.log(isDef("a"));