function makeid(_0x34369e = 0x4) {
  let _0x2ae2c5 = '';
  var _0x5a1650 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0xf96269 = 0x0; _0xf96269 < _0x34369e; _0xf96269++) {
    _0x2ae2c5 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x5a1650));
  }
  return _0x2ae2c5;
}
module.exports = {
  'makeid': makeid
};
