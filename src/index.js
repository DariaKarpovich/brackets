module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let objConf = {}

  bracketsConfig.map(element => {
    objConf[element[1]] = element[0]
  });

  for(let i = 0; i < str.length; i++) {
    if (objConf[str[i]] && objConf[str[i]] === stack[stack.length - 1]) { 
      stack.pop()
    } else {
        stack.push(str[i])
    }
  }

  return stack.length === 0;
}
