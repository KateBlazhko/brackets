
module.exports = function check(str, bracketsConfig) {
  const stack = [];
  
  for (const bracket of str) {
    
    const coupleOfbracket = bracketsConfig.find(coupleOfbracket => {
        if (coupleOfbracket[0] === bracket) return true
        if (coupleOfbracket[1] === bracket) return true
      return false
    })

    if (coupleOfbracket[0] === coupleOfbracket[1]) {

      if (stack[stack.length - 1] === bracket) stack.pop()
      else stack.push(bracket)

    } else {

      if (coupleOfbracket[0] === bracket) {
        stack.push(bracket)

      } else {
        const lastStackBracket = stack.pop()

        if (lastStackBracket !== coupleOfbracket[0]) {
          return false
        }

      }
    }

  }

  return stack.length === 0
}

// console.log( check(str, bracketsConfig) );
// node ./src/index.js brackets