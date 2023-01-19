/*MKnez wants to construct an array s1,s2,…,sn
 satisfying the following conditions:

Each element is an integer number different from 0
;
For each pair of adjacent elements their sum is equal to the sum of the whole array.
More formally, si≠0
 must hold for each 1≤i≤n
. Moreover, it must hold that s1+s2+⋯+sn=si+si+1
 for each 1≤i<n
.

Help MKnez to construct an array with these properties or determine that it does not exist.

Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤100
). The description of the test cases follows.

The only line of each test case contains a single integer n
 (2≤n≤1000
) — the length of the array.

Output
For each test case, print "YES" if an array of length n
 satisfying the conditions exists. Otherwise, print "NO". If the answer is "YES", on the next line print a sequence s1,s2,…,sn
 satisfying the conditions. Each element should be a non-zero integer in the range [−5000,5000]
, i. e. −5000≤si≤5000
 and si≠0
 should hold for each 1≤i≤n
.

It can be proved that if a solution exists then there also exists one which satisfies the additional constraints on the range.

If there are several correct answers, print any of them.

Example
inputCopy
2
2
3
outputCopy
YES
9 5
NO*/
var t = readline();
var n, s, x, y;
for(var i = 0; i<t; i++){
    n = readline();
    if(n == 3){
         print('NO')
    }
    else if(n%2 === 0){
        print('YES')
        s = "1";
        for(var j = 1; j<n; j++){
            if(j%2 === 0){
                s = s + " 1";
            }
            else{
                s = s + " -1";
            }
        }
        print(s);
    }
    else{
        y = -1 * Math.floor(n/2);
        // print(y);
        x = Math.floor(n/2) - 1;
        print('YES')
        s = ""+x;
        for(var j = 1; j<n; j++){
            if(j%2 === 0){
                s = s + " "+x;
            }
            else{
                s = s + " "+y;
            }
        }
        print(s);
    }
}