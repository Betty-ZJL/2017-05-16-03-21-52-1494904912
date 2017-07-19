module.exports = function main(email, suffixes) {
  var suf=email.substring(email.indexOf('@')+1)
  if (suffixes.indexOf(suf)>-1)
      return true;
  else 
      return false;
};
