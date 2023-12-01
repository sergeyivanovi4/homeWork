// bool type cast
!!2
!!0
!!1
// or
2 || 1
2 || 0
//and
2 && 1
1 && 2
0 && 2
// or and and difference
0 || 1 || 2
0 && 1 && 2
2 || 1 || 0
2 && 1 && 0
confirm('left') || confirm('right')
confirm('left') && confirm('right')
//null, undefined, so on
null || 2
undefined && 1
alert("Hello") && confirm('Are you sexy?');
alert("Hello") || confirm('Are you drunk?');
//brackets and complex expressions
(undefined || 2) && (3 || 0)
(2 && 1) || (null && 0)
(2 > 1) && "greater"
(2 < 1) && null
null && (2 < 1)
// ternary operator
1 ? "one" : "not one"
0 ? "zero" : "not zero"
"0" ? "\"zero\"" : "not `zero`"
parseInt("0") ? 'true' : 'false'
("" || 2) && (3 || "3.5") || (4 && 5)
(-1 + 1) && "zero"
"-1" + 1 && "oups"
(typeof null === 'object') ? "null is object" : "null is null"
// ternary && ||
Math.random() < 0.5 && 'less' || 'more'
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'