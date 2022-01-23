const caesar = function(string, cipher) {
  let stringArray = string.split("");
  const specialChars = [" ", "!", ",", "."];
  const encryptedArray = stringArray.map((char) => {
    if (specialChars.includes(char)) return char;
    let charUni = char.charCodeAt(0);
    if (charUni >= 65 && charUni <= 90){
      charUni += cipher % 26;
      if (charUni > 90){
        charUni = 65 + (charUni - 91);
      } else if (charUni < 65) {
        charUni = 91 - (65 - charUni);
      }
    } else if (charUni >= 97  && charUni <= 122) {
      charUni += cipher % 26;
      if (charUni > 122){
        charUni = 97 + (charUni - 123);
      } else if (charUni < 97) {
        charUni = 123 - (97 - charUni);
      }
    }
    char = String.fromCharCode(charUni);
    return char;
  })
  return encryptedArray.join('')
};

// Do not edit below this line
module.exports = caesar;
