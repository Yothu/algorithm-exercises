// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const sLength: number = s.length;
  const stack: Array<string> = [];
  
  for (let i: number = 0; i < sLength ; i += 1) {
    if (isOpen(s[i])) {
      stack.push(s[i]);
      continue;
    }
    if (isPair(stack.pop(), s[i])) continue;
    return false;
  }
  if (stack.length != 0) return false;
  return true;
};

const isOpen = (parentheses: string): boolean => {
  if (parentheses == '(' || parentheses == '[' || parentheses == '{') return true;
  return false;
};

const isPair = (open: string, close: string):boolean => {
  if (open == '(' && close == ')') return true;
  if (open == '[' && close == ']') return true;
  if (open == '{' && close == '}') return true;
  return false;
}
