const palindromes = word => {
  let newWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
  newWord = newWord.replaceAll(' ', '');
  newWord = newWord.split('');
  newWord = newWord.reverse();
  newWord = newWord.join('');
  newWord = newWord.toLowerCase();
  if (word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replaceAll(' ', '') === newWord){
    return true;
  } 
  else{
    console.log(newWord);
    console.log(word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replaceAll(' ', ''));
    return false;
  } 
}
// Do not edit below this line
module.exports = palindromes;
