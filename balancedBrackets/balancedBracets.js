// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    if (str.includes('(') & str.includes(')')) {
        return true;
    }   else if 
            (str.includes('[') & str.includes(']')) {
                return true;
            }
        else if 
            (str.includes('{') & str.includes('}')) {
                return true;
            }
     else {
        return false;
    }
};

console.log(isBalanced('({ })'))