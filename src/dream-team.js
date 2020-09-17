const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  let teamName = '';

  members.forEach(name => {
    if (typeof name !== 'string') return;
    if (name.length === 0) return;
  
    name = name.trim()

    if (!(/^[A-Za-z]$/.test(name[0]))) return;
    teamName += name[0].toUpperCase();
  });

  return teamName.split('').sort().join('');
};
