const repeatString = function (aString, aNum) {
    let ans = '';

    if (aNum < 0) {
        ans += 'ERROR'
        return ans;
    } else {
        while (aNum > 0) {
            ans += aString;
            aNum--;
        }
    } return ans;
}
// Do not edit below this line
module.exports = repeatString;
