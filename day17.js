/*
Kiyora has n
 whiteboards numbered from 1
 to n
. Initially, the i
-th whiteboard has the integer ai
 written on it.

Koxia performs m
 operations. The j
-th operation is to choose one of the whiteboards and change the integer written on it to bj
.

Find the maximum possible sum of integers written on the whiteboards after performing all m
 operations.

Input
Each test consists of multiple test cases. The first line contains a single integer t
 (1≤t≤1000
) — the number of test cases. The description of test cases follows.

The first line of each test case contains two integers n
 and m
 (1≤n,m≤100
).

The second line of each test case contains n
 integers a1,a2,…,an
 (1≤ai≤109
).

The third line of each test case contains m
 integers b1,b2,…,bm
 (1≤bi≤109
).

Output
For each test case, output a single integer — the maximum possible sum of integers written on whiteboards after performing all m
 operations.

Example
inputCopy
4
3 2
1 2 3
4 5
2 3
1 2
3 4 5
1 1
100
1
5 3
1 1 1 1 1
1000000000 1000000000 1000000000
outputCopy
12
9
1
3000000002 
 */
var x = readline();
for(var l = 0 ; l < x ; l++) {
    var dims = readline().split(' ').map(num => +num);
    var n = dims[0];
    var m = dims[1];
    var a = readline().split(' ').map(num => +num);
    var b = readline().split(' ').map(num => + num);
 
    var comb = [...a, ...b];
    comb.sort((a, b) => b - a);
 
    var sum = 0;
    var isIncluded = false;
    for(var i = 0; i < n; i++) {
        if(comb[i] === b[m - 1]) isIncluded = true;
        sum += comb[i];
    }
    if(!isIncluded) {
        sum = sum - comb[n - 1] + b[m - 1];
        
    }
 
    print(sum);
}