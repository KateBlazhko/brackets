//const bracketsConfig = [['(', ')'], ['|', '|']];
//const str = '|()|'

module.exports = function check(str, bracketsConfig) {
  let arrOpen = [];
  let arrClose = [];
  let arrFull = str.split('');
  let checkOpen;
  let checkClose;
  let a;
  do {
    a = 0;
    bracketsConfig.forEach(coupleOfbracket => {
      checkClose = arrFull.indexOf(coupleOfbracket[1]);

      if (coupleOfbracket[0] === coupleOfbracket[1]) {
        checkClose = arrFull.indexOf(coupleOfbracket[1], (checkClose + 1));
      };

      checkOpen = arrFull.lastIndexOf(coupleOfbracket[0], checkClose - 1);

      if (arrFull[checkClose - 1] === coupleOfbracket[0]) {
        arrFull.splice(checkClose, 1);
        arrFull.splice(checkOpen, 1);
        a = 1;
      }
    });

  } while (a && (arrFull.length !== 0))

  return (arrFull.length === 0) ? true : false;


}

//console.log( check(str, bracketsConfig) );
// node ./src/index.js brackets