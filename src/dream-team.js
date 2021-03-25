const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;
  let team = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][j] != ' ') {
          team += members[i][j];
          break;
        }
      }
    }
  }
  return team.toUpperCase().split("").sort().join("");
}