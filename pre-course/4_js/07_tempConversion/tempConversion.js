// temp conversion
// f -> C == [°C] = ([°F] − 32) × 5⁄9
const ftoc = function (temp_in_f) {
  let f = temp_in_f;
  let c = (f - 32) * (5 / 9);
  return (Math.round(c * 10) / 10);
};
// c --> f = [°F] = [°C] × 9⁄5 + 32 
const ctof = function (temp_in_c) {
  let c = temp_in_c;
  let f = c * (9 / 5) + 32;
  return (Math.round(f * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
