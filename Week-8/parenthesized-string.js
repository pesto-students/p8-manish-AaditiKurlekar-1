function parenthesized(mainString) {
  let stack = [];

  let str = mainString;
  let stackTop = 0;
  for (let i = 0; i < str.length; i++) {
    stackTop = stack[stack.length - 1];
    //console.log(stackTop);
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (
      (str[i] == ")" && stackTop == "(") ||
      (str[i] == "]" && stackTop == "[") ||
      (str[i] == "}" && stackTop == "{")
    ) {
      stack.pop();
    }
  }

  if (stack.length > 0) {
    return "Not parenthesized";
  } else {
    return "parenthesized!!!";
  }
}

console.log(parenthesized("[()]{}(([]))"));
